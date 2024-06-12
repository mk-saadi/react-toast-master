import { CheckCheck, CircleDashed, Info, PinIcon, X, XCircle } from "lucide-react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import "./components/styles/background.css";
import "./components/styles/border.css";
import "./components/styles/button.css";
import "./components/styles/shadows.css";
import "./components/styles/textAlign.css";
import "./components/styles/textColor.css";
import "./components/styles/toastPosition.css";
import "./components/styles/animation.css";
import "./components/styles/breakPoints.css";
import "./components/styles/skew.css";

import Footer from "./components/footer/Footer";
import InnerFooter from "./components/footer/InnerFooter";
import LoadFooter from "./components/footer/LoadFooter";
import { getAnimation } from "./components/functions/animation";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
	const [toastType, setToastType] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const [confirmResolve, setConfirmResolve] = useState(null);
	const [toastTimeout, setToastTimeout] = useState(null);
	const [showCloseButton, setShowCloseButton] = useState(true);
	const [showButton, setShowButton] = useState(null);

	const [toastBackground, setToastBackground] = useState("");
	const [toastPosition, setToastPosition] = useState("");
	const [toastSkew, setToastSkew] = useState("");
	const [toastAnimation, setToastAnimation] = useState("");
	const [toastShadow, setToastShadow] = useState("");
	const [toastRadius, setToastRadius] = useState("");
	const [toastAlignment, setToastAlignment] = useState("");
	const [showOverlay, setShowOverlay] = useState(false);

	const [footer, setFooter] = useState(null);
	const [showLoadFooter, setShowLoadFooter] = useState(false);
	const [loadFooter, setLoadFooter] = useState(null);

	const confirmButtonRef = useRef(null);

	const toastBackgroundClasses = {
		success: "bg_success",
		error: "bg_error",
		warning: "bg_warning",
		info: "bg_info",
		glass: "bg_glass",
		white: "bg_white",
		dark: "bg_dark",
		gray: "bg_gray",
		transparent: "bg_transparent",
	};

	const toastPositionClasses = {
		top: "top",
		topFull: "topFull",
		topLeft: "topLeft",
		topRight: "topRight",

		bottom: "bottom",
		bottomFull: "bottomFull",
		bottomLeft: "bottomLeft",
		bottomRight: "bottomRight",

		center: "middle",
	};
	const toastRevealAnimation = {
		down: "ani_down",
		top: "ani_top",
		left: "ani_left",
		right: "ani_right",
		fade: "ani_fade",
		zoom: "ani_zoom",
		jelly: "ani_jelly",
	};

	const toastAwesomeAlignment = {
		left: "text_start",
		right: "text_end",
		center: "text_center",
	};
	const toastAwesomeSkew = {
		right3: "three",
		right6: "six",
		right12: "twelve",
	};
	const toastAwesomeShadow = {
		none: "",
		gray: "box_shadow",
		block: "box_shadow_block",
		error: "shadow_error",
		white: "shadow_white",
		dark: "shadow_dark",
		success: "shadow_success",
		info: "shadow_info",
		warning: "shadow_warning",
		around: "shadow_around",
	};
	const toastAwesomeRadius = {
		none: "rounded_none",
		sm: "rounded_sm",
		md: "rounded_md",
		lg: "rounded_lg",
		xl: "rounded_xl",
		twoXl: "rounded_2xl",
		full: "rounded_full",
	};

	/**
	 * Find the position class key from the toastPositionClasses object
	 * that matches the toastPosition prop value.~
	 * @param {Object} toastPositionClasses - the object containing all the
	 * position classes as keys and their corresponding values
	 * @param {string} toastPosition - the position to be matched
	 * @returns {string} the key of the matching position class
	 */
	const toastPG = Object.keys(toastPositionClasses).find(
		(key) => toastPositionClasses[key] === toastPosition
	);

	/**
	 * Find the background class key from the toastBackgroundClasses object
	 * that matches the toastBackground prop value.
	 * @param {Object} toastBackgroundClasses - the object containing all the
	 * background classes as keys and their corresponding values
	 * @param {string} toastBackground - the background color to be matched
	 * @returns {string} the key of the matching background class
	 */
	const toastBG = Object.keys(toastBackgroundClasses).find(
		(key) => toastBackgroundClasses[key] === toastBackground
	);

	const animation = getAnimation(toastAnimation, toastPG);

	const hideToast = () => {
		setToastAnimation(animation);

		const timeoutId = setTimeout(() => {
			setToastType("");
			setToastMessage("");
			clearTimeout(toastTimeout);
			setToastAnimation("");
		}, 300);

		return () => clearTimeout(timeoutId);
	};

	/**
	 * Displays a toast notification with the given configuration.
	 * If a toast is already being displayed, it will clear the previous timeout and replace it with the new toast.
	 *
	 * @param {Object} toast - The configuration object for the toast.
	 * @param {string} [toast.type="success"] - The type of toast (e.g., "success", "error", "warning").
	 * @param {string} [toast.message=""] - The message to be displayed in the toast.
	 * @param {string} [toast.bg="white"] - The background color of the toast.
	 * @param {string} [toast.position="top"] - The position of the toast on the screen.
	 * @param {string} [toast.transition="zoom"] - The animation transition for the toast.
	 * @param {*} [toast.loadFooter=null] - A function to load the footer of the toast.
	 * @param {*} [toast.footer=null] - The footer content for the toast.
	 * @param {string} [toast.skew=""] - The skew effect for the toast.
	 * @param {boolean} [toast.cancelButton=true] - Whether to show the cancel button on the toast.
	 * @param {string} [toast.shadow="gray"] - The shadow style for the toast.
	 * @param {string} [toast.radius="lg"] - The border radius of the toast.
	 * @param {string} [toast.align="center"] - The text alignment of the toast.
	 *
	 * @returns {Promise} A promise that resolves when the toast is confirmed or dismissed.
	 */
	const toastMaster = (toast) => {
		if (toastTimeout) {
			clearTimeout(toastTimeout);
		}
		return new Promise((resolve) => {
			setToastAnimation(animation);

			const openToast = () => {
				openNewToast(toast, resolve);
			};

			if (toastType) {
				setTimeout(openToast, 300);
			} else {
				openToast();
			}
		});
	};

	const openNewToast = (toast, resolve) => {
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
		} = toast;

		setToastType(type);
		setToastMessage(message);
		setLoadFooter(loadFooter);
		setFooter(footer);
		setShowButton(cancelButton);

		const toastBackground = toastBackgroundClasses[bg] || "";
		const toastPosition = toastPositionClasses[position] || "";
		const revealAnimation = toastRevealAnimation[transition] || "";
		const toastSkew = toastAwesomeSkew[skew] || "";
		const toastShadow = toastAwesomeShadow[shadow] || "";
		const toastRadius = toastAwesomeRadius[radius] || "";
		const toastAlignment = toastAwesomeAlignment[align] || "";

		setToastBackground(toastBackground);
		setToastPosition(toastPosition);
		setToastAnimation(revealAnimation);
		setToastSkew(toastSkew);
		setToastShadow(toastShadow);
		setToastRadius(toastRadius);
		setToastAlignment(toastAlignment);

		if (
			type === "success" ||
			type === "successWhite" ||
			type === "successDark" ||
			type === "error" ||
			type === "errorWhite" ||
			type === "errorDark" ||
			type === "warning" ||
			type === "warningWhite" ||
			type === "warningDark" ||
			type === "info" ||
			type === "infoWhite" ||
			type === "infoDark" ||
			type === "basic" ||
			type === "basicDark"
		) {
			setToastTimeout(setTimeout(() => hideToast(), 4500));
		}

		if (type === "confirm" || type === "confirmDark") {
			setConfirmResolve(() => resolve);
		}

		if (type === "loading" || type === "loadingWhite" || type === "loadingDark") {
			setShowLoadFooter(false);
			setTimeout(() => setShowLoadFooter(true), 5330);
		}
		if (type === "loading" || type === "loadingWhite" || type === "loadingDark") {
			setToastType("");
			setToastMessage("");
			setLoadFooter("");
			setFooter("");
			setShowButton(false);

			setTimeout(() => {
				setToastType(type);
				setToastMessage(message);
				setLoadFooter(loadFooter);
				setFooter(footer);
				setShowButton(cancelButton);
			}, 330);

			return;
		}
	};

	/**
	 * Handles the show/hide of the close button of the toast.
	 *
	 * The close button is hidden when the loading toast initially appears,
	 * after 7 seconds the close button is shown.
	 */
	useEffect(() => {
		if (toastType === "loading" || toastType === "loadingWhite" || toastType === "loadingDark") {
			setShowCloseButton(false);
			setTimeout(() => setShowCloseButton(true), 5000);
		} else {
			setShowCloseButton(true);
		}
	}, [toastType]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		/**
		 * Handles the key down event and hides the toast if the escape key is pressed.
		 *
		 * @param {Object} event - the key down event object
		 */
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				hideToast();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	/**
	 * Handles the confirmation of "confirm" tost type.
	 *
	 * @returns {Function} a function to clear the timeout
	 */
	const handleConfirm = () => {
		setToastAnimation(animation);

		const timeoutId = setTimeout(() => {
			if (confirmResolve) {
				confirmResolve(true);
			}
			setToastAnimation("");
			hideToast();
			setShowOverlay(false);
		}, 330);

		return () => clearTimeout(timeoutId);
	};
	/**
	 * Sets focus to the confirm button when toastType is "confirm" or "confirmDark"
	 */
	useEffect(() => {
		if (toastType === "confirm" || toastType === "confirmDark") {
			confirmButtonRef.current.focus();
		}
	}, [toastType]);

	/**
	 * Handles the cancellation of "confirm" and "confirmDark" tost types.
	 */
	const handleCancel = () => {
		if (confirmResolve) {
			confirmResolve(false);
		}
		hideToast();
		setShowOverlay(false);
	};

	const toastClasses = {
		success: "text_success",
		error: "text_error",
		loading: "text_warning",
		warning: "text_warning",
		warningStay: "text_warning",
		info: "text_info",
		infoStay: "text_info",
		confirm: "text_white",
		basic: "text_white",

		successWhite: "text_white",
		errorWhite: "text_white",
		loadingWhite: "text_white",
		warningWhite: "text_white",
		warningStayWhite: "text_white",
		infoWhite: "text_white",
		infoStayWhite: "text_white",

		successDark: "text_dark",
		errorDark: "text_dark",
		loadingDark: "text_dark",
		warningDark: "text_dark",
		warningStayDark: "text_dark",
		infoDark: "text_dark",
		infoStayDark: "text_dark ",
		confirmDark: "text_dark ",
		basicDark: "text_dark ",
	};

	/**
	 * Create a proxy that will return the appropriate icon component based on
	 * the prop name passed to it.
	 * @returns {React.Component} Icon component
	 */
	const iconComponent = new Proxy(
		{},
		{
			/**
			 * Get the icon component based on the prop name.
			 * @param {Object} target - The target object
			 * @param {string} prop - The prop name
			 * @returns {React.Component} Icon component
			 */
			get(target, prop) {
				switch (prop) {
					case "success":
					case "successWhite":
					case "successDark":
						return <CheckCheck />;

					case "error":
					case "errorWhite":
					case "errorDark":
						return <XCircle />;

					case "loading":
					case "loadingWhite":
					case "loadingDark":
						return <CircleDashed className="animate_spin" />;

					case "warning":
					case "warningWhite":
					case "warningDark":
					case "warningStay":
					case "warningStayWhite":
					case "warningStayDark":
						return <Info />;

					case "info":
					case "infoWhite":
					case "infoDark":
					case "infoStay":
					case "infoStayWhite":
					case "infoStayDark":
						return <PinIcon className="rotate_deg" />;

					default:
						return undefined;
				}
			},
		}
	);

	/**
	 * Set of toast types that are not auto-hidden
	 *
	 * These are toast types that do not hide automatically, instead they require
	 * manual dismissal, hence we clear the timeout when the user hovers over the
	 * toast and set it again when the user leaves the toast.
	 */
	const nonAutoHideTypesSet = new Set([
		"confirm",
		"confirmWhite",
		"confirmDark",
		"infoStay",
		"infoStayWhite",
		"infoStayDark",
		"loading",
		"loadingWhite",
		"loadingDark",
		"warningStay",
		"warningStayWhite",
		"warningStayDark",
	]);

	/**
	 * Handle the mouseenter event on the toast
	 *
	 * If the toast type is not in the nonAutoHideTypesSet, then we clear the
	 * toast timeout, so that the toast does not get hidden automatically.
	 */
	const handleMouseEnter = () => {
		if (!nonAutoHideTypesSet.has(toastType)) {
			clearTimeout(toastTimeout);
		}
	};

	/**
	 * Handle the mouseleave event on the toast
	 *
	 * If the toast type is not in the nonAutoHideTypesSet, then we set the
	 * toast timeout again, so that the toast gets hidden after the timeout
	 * duration.
	 */
	const handleMouseLeave = () => {
		if (!nonAutoHideTypesSet.has(toastType)) {
			setToastTimeout(setTimeout(hideToast, 1500));
		}
	};

	/**
	 * Sets the showOverlay state based on the type of the toast
	 *
	 * ShowOverlay is using class "overlay" to show a semi transparent overlay
	 * and blur on beneath of "confirm" and "confirmDark" toast
	 *
	 * If the toast type is either confirm or confirmDark, then set
	 * showOverlay to true, else set it to false
	 */
	useEffect(() => {
		setShowOverlay(toastType === "confirm" || toastType === "confirmDark");
	}, [toastType]);

	return (
		<ToastContext.Provider value={{ toastMaster, hideToast }}>
			<>
				{children}
				{toastType && (
					<>
						{(toastType === "confirm" || toastType === "confirmDark") && (
							<div className={`overlay ${showOverlay ? "show" : ""}`} />
						)}
						<div
							className={`outer_container ${toastPosition} ${toastAnimation}`}
							style={{ zIndex: "9999" }}
						>
							<div
								className={`inner_container ${
									toastPG === "bottomFull" || toastPG === "topFull"
										? "toast_width_full"
										: "max_width"
								} ${
									toastClasses[toastType]
								} ${toastBackground} ${toastSkew} ${toastShadow} ${toastRadius}`}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<div
									className={`${
										toastType === "confirm" || toastType === "confirmDark"
											? "toast_width_confirm"
											: "toast_width"
									}`}
								>
									<div className={`toast_message ${toastAlignment}`}>
										{toastType !== "confirm" &&
											toastType !== "confirmDark" &&
											toastType !== "basic" &&
											toastType !== "basicDark" && (
												<div>
													<span className="sr_only">toast icon</span>
													<span aria-hidden="true">{iconComponent[toastType]}</span>
												</div>
											)}
										<>{toastMessage}</>

										{/* close button below */}
										<div
											className={`closeDiv ${
												showCloseButton &&
												showButton &&
												toastType !== "confirm" &&
												toastType !== "confirmDark" &&
												toastPG !== "bottomFull" &&
												toastPG !== "topFull"
													? `div_flex`
													: "div_hidden"
											}`}
										>
											<>
												<button
													onClick={hideToast}
													id="close"
													className={`closeButton 
													${
														toastBG === "white"
															? "bg_whiter"
															: toastBG === "glass" || toastBG === "transparent"
															? "bg_glass_close"
															: "bg_darker"
													}`}
												>
													{/* This span is just for accessibility purposes so that screen
													readers will know what the close button does. */}
													<span className="sr_only">close toast</span>
													{/* This is the close icon. */}
													<X
														aria-hidden="true"
														size={18}
													/>
												</button>
											</>
										</div>
									</div>

									{["confirm", "confirmDark"].includes(toastType) && footer && (
										<InnerFooter
											footer={footer}
											toastBG={toastBG}
											toastAlignment={toastAlignment}
											toastType={toastType}
										/>
									)}

									<>
										{(toastType === "confirm" || toastType === "confirmDark") && (
											<div
												className={`confirm_div  
												${
													toastAlignment === "text_start"
														? "justify_end"
														: toastAlignment === "text_end"
														? "justify_start"
														: toastAlignment === "text_center"
														? "justify_center"
														: null
												}
											`}
											>
												<button
													className={`cancel_button ${
														toastBG === "white"
															? "cancel_button_dark"
															: toastBG === "success" ||
															  toastBG === "warning" ||
															  toastBG === "error" ||
															  toastBG === "info" ||
															  toastBG === "dark"
															? "cancel_button_all"
															: "cancel_button_glass"
													}`}
													onClick={handleCancel}
												>
													<span className="sr_only">close toast</span>
													Cancel
												</button>

												<button
													ref={confirmButtonRef}
													className={`confirm_button
													${toastBG === "dark" ? "confirm_button_dark" : "confirm_button_white"}`}
													onClick={handleConfirm}
												>
													<span className="sr_only">confirm action</span>
													Confirm
												</button>
											</div>
										)}
									</>
								</div>

								<>
									{!(
										toastType === "confirmDark" ||
										toastType === "confirm" ||
										toastPG === "bottomFull" ||
										toastPG === "topFull"
									) && (
										<div>
											{footer && (
												<Footer
													footer={footer}
													toastBG={toastBG}
													toastAlignment={toastAlignment}
												/>
											)}
										</div>
									)}

									{!(
										toastPG === "bottomFull" ||
										toastPG === "topFull" ||
										toastType === "confirmDark" ||
										toastType === "confirm"
									) &&
										showLoadFooter &&
										loadFooter && (
											<LoadFooter
												toastAlignment={toastAlignment}
												toastBG={toastBG}
												loadFooter={loadFooter}
											/>
										)}
								</>
							</div>
						</div>
					</>
				)}
			</>
		</ToastContext.Provider>
	);
};
