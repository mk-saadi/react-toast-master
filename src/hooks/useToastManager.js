import { useState, useRef, useCallback, useEffect } from "react";
import { TOAST_STYLES } from "../constants/styles";
import { getAnimation } from "../utils/getAnimation";
import { TOAST_BEHAVIOR } from "../constants/behavior";

export const useToastManager = () => {
	const [toasts, setToasts] = useState([]);
	const confirmPromises = useRef(new Map());
	const timeoutRefs = useRef(new Map());
	const toastsRef = useRef(toasts);

	useEffect(() => {
		toastsRef.current = toasts;
	}, [toasts]);

	const generateToastId = useCallback(() => {
		return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
	}, []);

	const clearToastTimeout = useCallback((id) => {
		if (timeoutRefs.current.has(id)) {
			clearTimeout(timeoutRefs.current.get(id));
			timeoutRefs.current.delete(id);
		}
	}, []);

	const hideToast = useCallback((id) => {
		const toastId = id ?? toastsRef.current?.[toastsRef.current.length - 1]?.id;
		if (!toastId) return;

		setToasts((prev) => {
			const idx = prev.findIndex((t) => t.id === toastId);
			if (idx === -1) return prev;
			const t = prev[idx];
			const posKey = Object.keys(TOAST_STYLES.positionClasses).find(
				(k) => TOAST_STYLES.positionClasses[k] === t.position,
			);
			const closingAnim = getAnimation(t.animation, posKey);
			const copy = [...prev];
			copy[idx] = { ...t, animation: closingAnim, isExiting: true };
			return copy;
		});

		const timeout = setTimeout(() => {
			setToasts((curr) => curr.filter((t) => t.id !== toastId));
			confirmPromises.current.delete(toastId);
		}, TOAST_BEHAVIOR.durations.animationClose);

		timeoutRefs.current.set(toastId, timeout);
	}, []);

	const handleConfirm = useCallback(
		(id) => {
			setToasts((prevToasts) => {
				const toastIndex = prevToasts.findIndex((toast) => toast.id === id);
				if (toastIndex === -1) return prevToasts;

				const updatedToasts = [...prevToasts];
				const toast = updatedToasts[toastIndex];
				updatedToasts[toastIndex] = {
					...toast,
					animation: getAnimation(toast.animation, toast.position),
				};
				return updatedToasts;
			});

			clearToastTimeout(id);

			timeoutRefs.current.set(
				id,
				setTimeout(() => {
					if (confirmPromises.current.has(id)) {
						confirmPromises.current.get(id)(true);
						confirmPromises.current.delete(id);
					}

					setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
				}, TOAST_BEHAVIOR.durations.animationClose),
			);
		},
		[clearToastTimeout],
	);

	const handleCancel = useCallback(
		(id) => {
			if (confirmPromises.current.has(id)) {
				confirmPromises.current.get(id)(false);
				confirmPromises.current.delete(id);
			}

			hideToast(id);
		},
		[hideToast],
	);

	const handleMouseEnter = useCallback(
		(id, type) => {
			if (TOAST_BEHAVIOR.autoHideTypes.includes(type)) {
				clearToastTimeout(id);
			}
		},
		[clearToastTimeout],
	);

	const handleMouseLeave = useCallback(
		(id, type) => {
			if (TOAST_BEHAVIOR.autoHideTypes.includes(type)) {
				timeoutRefs.current.set(
					id,
					setTimeout(() => hideToast(id), TOAST_BEHAVIOR.durations.afterHover),
				);
			}
		},
		[hideToast],
	);

	const openNewToast = useCallback(
		(toast, resolve) => {
			const {
				type = "success",
				message = "",
				bg = "white",
				position = "top",
				transition = "zoom",
				loadFooter = null,
				footer = null,
				skew = "",
				cancelButton = true,
				shadow = "gray",
				radius = "lg",
				align = "center",
				timeout = TOAST_BEHAVIOR.durations.standard,
				custom = null,
			} = toast;

			const id = generateToastId();

			const background = TOAST_STYLES.backgroundClasses[bg] || "";
			const positionClass = TOAST_STYLES.positionClasses[position] || "";
			const animation = TOAST_STYLES.animationClasses[transition] || "";
			const skewClass = TOAST_STYLES.skewClasses[skew] || "";
			const shadowClass = TOAST_STYLES.shadowClasses[shadow] || "";
			const radiusClass = TOAST_STYLES.radiusClasses[radius] || "";
			const alignmentClass = TOAST_STYLES.alignmentClasses[align] || "";

			const toastData = {
				id,
				type,
				message,
				position: positionClass,
				background,
				animation,
				skew: skewClass,
				shadow: shadowClass,
				radius: radiusClass,
				alignment: alignmentClass,
				footer,
				loadFooter,
				showButton: cancelButton,
				showCloseButton: true,
				showLoadFooter: false,
				showOverlay: TOAST_BEHAVIOR.overlayTypes.includes(type),
				timeout,
				custom,
			};

			if (TOAST_BEHAVIOR.loadingTypes.includes(type)) {
				toastData.showCloseButton = false;
				toastData.showLoadFooter = false;
			}

			setToasts((prevToasts) => {
				const aliveToasts = prevToasts.filter((t) => !t.isExiting);

				let updatedToasts = [...prevToasts];

				if (aliveToasts.length >= 3) {
					const oldestAliveToast = aliveToasts[0];

					updatedToasts = updatedToasts.map((toast) =>
						toast.id === oldestAliveToast.id
							? {
									...toast,
									isExiting: true,
									animation: getAnimation(toast.animation, toast.position),
								}
							: toast,
					);

					setTimeout(() => {
						setToasts((currentToasts) =>
							currentToasts.filter((t) => t.id !== oldestAliveToast.id),
						);

						if (timeoutRefs.current.has(oldestAliveToast.id)) {
							clearTimeout(timeoutRefs.current.get(oldestAliveToast.id));
							timeoutRefs.current.delete(oldestAliveToast.id);
						}
					}, TOAST_BEHAVIOR.durations.animationClose);
				}

				return [...updatedToasts, toastData];
			});

			if (TOAST_BEHAVIOR.loadingTypes.includes(type)) {
				setTimeout(() => {
					setToasts((prevToasts) => {
						const toastIndex = prevToasts.findIndex((t) => t.id === id);
						if (toastIndex === -1) return prevToasts;
						const updatedToasts = [...prevToasts];
						updatedToasts[toastIndex].showCloseButton = true;
						return updatedToasts;
					});
				}, TOAST_BEHAVIOR.durations.loadingCloseButtonDelay);

				setTimeout(() => {
					setToasts((prevToasts) => {
						const toastIndex = prevToasts.findIndex((t) => t.id === id);
						if (toastIndex === -1) return prevToasts;
						const updatedToasts = [...prevToasts];
						updatedToasts[toastIndex].showLoadFooter = true;
						return updatedToasts;
					});
				}, TOAST_BEHAVIOR.durations.loadingFooterDelay);
			}

			if (TOAST_BEHAVIOR.overlayTypes.includes(type) && resolve) {
				confirmPromises.current.set(id, resolve);
			}

			if (
				!TOAST_BEHAVIOR.stayTypes.includes(type) &&
				!TOAST_BEHAVIOR.loadingTypes.includes(type) &&
				!TOAST_BEHAVIOR.overlayTypes.includes(type)
			) {
				timeoutRefs.current.set(
					id,
					setTimeout(() => hideToast(id), timeout),
				);
			}

			return id;
		},
		[generateToastId, hideToast],
	);

	const toastMaster = useCallback(
		(toast) => {
			return new Promise((resolve) => {
				const toastId = openNewToast(toast, resolve);
				return toastId;
			});
		},
		[openNewToast],
	);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape" && toasts.length > 0) {
				const lastToast = toasts[toasts.length - 1];
				if (lastToast) {
					hideToast(lastToast.id);
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [hideToast, toasts]);

	useEffect(() => {
		return () => {
			timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
			timeoutRefs.current.clear();
		};
	}, []);

	return {
		toasts,
		setToasts,
		toastMaster,
		hideToast,
		handleConfirm,
		handleCancel,
		handleMouseEnter,
		handleMouseLeave,
	};
};
