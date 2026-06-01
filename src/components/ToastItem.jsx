import React from "react";
import { X, CheckCheck, XCircle, CircleDashed, Info, PinIcon } from "lucide-react";
import { TOAST_STYLES, TOAST_BEHAVIOR } from "../constants/index.js";
import Footer from "./footer/Footer";
import InnerFooter from "./footer/InnerFooter";
import LoadFooter from "./footer/LoadFooter";

export const ToastItem = ({ toast, onHide, onConfirm, onCancel, onMouseEnter, onMouseLeave, setToasts }) => {
	const positionKey = Object.keys(TOAST_STYLES.positionClasses).find(
		(key) => TOAST_STYLES.positionClasses[key] === toast.position,
	);

	const backgroundKey = Object.keys(TOAST_STYLES.backgroundClasses).find(
		(key) => TOAST_STYLES.backgroundClasses[key] === toast.background,
	);

	const isFullWidth = positionKey === "bottomFull" || positionKey === "topFull";

	const isConfirmType = TOAST_BEHAVIOR.overlayTypes.includes(toast.type);

	const isBasicType = toast.type === "basic" || toast.type === "basicDark";
	const isCustomType = toast.type === "custom" || toast.type === "customStay";

	const getIconForType = (type) => {
		if (type.includes("success")) return <CheckCheck />;
		if (type.includes("error")) return <XCircle />;
		if (type.includes("loading")) return <CircleDashed className="animate_spin" />;
		if (type.includes("warning")) return <Info />;
		if (type.includes("info")) return <PinIcon className="rotate_deg" />;
		return null;
	};

	return (
		<React.Fragment key={toast.id}>
			{/* Overlay for confirm toasts */}
			{toast.showOverlay && <div className={`overlay ${toast.showOverlay ? "show" : ""}`} />}

			{/* Toast container */}
			<div
				className={`
							outer_container 
							${toast.position} 
							${toast.animation}
							${toast.isExiting ? "exiting" : ""}
						`}
				style={{ zIndex: 9999 }}
				onAnimationEnd={() => {
					if (toast.isExiting) {
						setToasts((prev) => prev.filter((t) => t.id !== toast.id));
					}
				}}
			>
				{isCustomType ? (
					<div
						className={`inner_container ${
							isFullWidth ? "toast_width_full" : "max_width"
						} ${toast.radius}`}
						onMouseEnter={() => onMouseEnter(toast.id, toast.type)}
						onMouseLeave={() => onMouseLeave(toast.id, toast.type)}
					>
						{toast.custom}
					</div>
				) : isConfirmType ? (
					<div
						className={`inner_container ${
							isFullWidth ? "toast_width_full" : "max_width"
						} ${TOAST_STYLES.textClasses[toast.type]} ${toast.background} ${
							toast.skew
						} ${toast.shadow} ${toast.radius}`}
						onMouseEnter={() => onMouseEnter(toast.id, toast.type)}
						onMouseLeave={() => onMouseLeave(toast.id, toast.type)}
					>
						<div className={isConfirmType ? "toast_width_confirm" : "toast_width"}>
							{/* Toast message area */}
							<div className={`confirm_message ${toast.alignment}`}>
								{!isBasicType && (
									<div>
										<span className="sr_only">toast icon</span>
										<span aria-hidden="true">{getIconForType(toast.type)}</span>
									</div>
								)}

								{/* Message content */}
								<>{toast.message}</>

								{/* Close button */}
								<div
									className={`closeDiv ${
										toast.showCloseButton && toast.showButton && !isConfirmType
											? "div_flex"
											: "div_hidden"
									}`}
								>
									<button
										onClick={() => onHide(toast.id)}
										id={`close-${toast.id}`}
										className={`closeButton ${
											backgroundKey === "white"
												? "bg_whiter"
												: backgroundKey === "glass" || backgroundKey === "transparent"
													? "bg_glass_close"
													: "bg_darker"
										}`}
									>
										<span className="sr_only">close toast</span>
										<X
											aria-hidden="true"
											size={18}
										/>
									</button>
								</div>
							</div>

							{/* Inner footer for confirm toasts */}
							{toast.footer && (
								<InnerFooter
									footer={toast.footer}
									toastBG={backgroundKey}
									toastAlignment={toast.alignment}
								/>
							)}

							{/* Confirm buttons for confirm toasts */}
							<div
								className={`confirm_div ${
									toast.alignment === "text_start"
										? "justify_end"
										: toast.alignment === "text_end"
											? "justify_start"
											: toast.alignment === "text_center"
												? "justify_center"
												: null
								}`}
							>
								<button
									className={`cancel_button ${
										backgroundKey === "white"
											? "cancel_button_dark"
											: backgroundKey === "success" ||
												  backgroundKey === "warning" ||
												  backgroundKey === "error" ||
												  backgroundKey === "info" ||
												  backgroundKey === "dark"
												? "cancel_button_all"
												: "cancel_button_glass"
									}`}
									onClick={() => onCancel(toast.id)}
								>
									<span className="sr_only">close toast</span>
									Cancel
								</button>

								<button
									className={`confirm_button ${
										backgroundKey === "dark"
											? "confirm_button_dark"
											: "confirm_button_white"
									}`}
									onClick={() => onConfirm(toast.id)}
								>
									<span className="sr_only">confirm action</span>
									Confirm
								</button>
							</div>
						</div>
					</div>
				) : (
					<div
						className={`inner_container ${
							isFullWidth ? "toast_width_full" : "max_width"
						} ${TOAST_STYLES.textClasses[toast.type]} ${toast.background} ${
							toast.skew
						} ${toast.shadow} ${toast.radius}`}
						onMouseEnter={() => onMouseEnter(toast.id, toast.type)}
						onMouseLeave={() => onMouseLeave(toast.id, toast.type)}
					>
						<div className={isConfirmType ? "toast_width_confirm" : "toast_width"}>
							{/* Toast message area */}
							<div className={`toast_message ${toast.alignment}`}>
								{/* Icon - show for all except confirm and basic types */}
								{!isConfirmType && !isBasicType && (
									<div>
										<span className="sr_only">toast icon</span>
										<span aria-hidden="true">{getIconForType(toast.type)}</span>
									</div>
								)}

								{/* Message content */}
								<>{toast.message}</>

								{/* Close button */}
								<div
									className={`closeDiv ${
										toast.showCloseButton && toast.showButton && !isConfirmType
											? "div_flex"
											: "div_hidden"
									}`}
								>
									<button
										onClick={() => onHide(toast.id)}
										id={`close-${toast.id}`}
										className={`closeButton
														${
															backgroundKey === "white"
																? "bg_whiter"
																: backgroundKey === "glass" ||
																	  backgroundKey === "transparent"
																	? "bg_glass_close"
																	: "bg_darker"
														}`}
									>
										<span className="sr_only">close toast</span>
										<X
											aria-hidden="true"
											size={18}
										/>
									</button>
								</div>
							</div>

							{/* Inner footer for confirm toasts */}
							{isConfirmType && toast.footer && (
								<InnerFooter
									footer={toast.footer}
									toastBG={backgroundKey}
									toastAlignment={toast.alignment}
								/>
							)}

							{/* Confirm buttons for confirm toasts */}
							{isConfirmType && (
								<div
									className={`confirm_div
													${
														toast.alignment === "text_start"
															? "justify_end"
															: toast.alignment === "text_end"
																? "justify_start"
																: toast.alignment === "text_center"
																	? "justify_center"
																	: null
													}
													`}
								>
									<button
										className={`cancel_button ${
											backgroundKey === "white"
												? "cancel_button_dark"
												: backgroundKey === "success" ||
													  backgroundKey === "warning" ||
													  backgroundKey === "error" ||
													  backgroundKey === "info" ||
													  backgroundKey === "dark"
													? "cancel_button_all"
													: "cancel_button_glass"
										}`}
										onClick={() => onCancel(toast.id)}
									>
										<span className="sr_only">close toast</span>
										Cancel
									</button>

									<button
										className={`confirm_button
														${backgroundKey === "dark" ? "confirm_button_dark" : "confirm_button_white"}`}
										onClick={() => onConfirm(toast.id)}
									>
										<span className="sr_only">confirm action</span>
										Confirm
									</button>
								</div>
							)}
						</div>

						{/* Footer content */}
						<>
							{/* Regular footer (non-confirm, non-full-width) */}
							{!isConfirmType && !isFullWidth && toast.footer && (
								<div>
									<Footer
										footer={toast.footer}
										toastBG={backgroundKey}
										toastAlignment={toast.alignment}
									/>
								</div>
							)}

							{/* Load footer */}
							{!isConfirmType && !isFullWidth && toast.showLoadFooter && toast.loadFooter && (
								<LoadFooter
									toastAlignment={toast.alignment}
									toastBG={backgroundKey}
									loadFooter={toast.loadFooter}
								/>
							)}
						</>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};
