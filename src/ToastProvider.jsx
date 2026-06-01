import React, { createContext, useContext } from "react";
import { ToastItem } from "./components/ToastItem";
import { useToastManager } from "./hooks/useToastManager";

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

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
	const {
		toasts,
		setToasts,
		toastMaster,
		hideToast,
		handleConfirm,
		handleCancel,
		handleMouseEnter,
		handleMouseLeave,
	} = useToastManager();

	return (
		<ToastContext.Provider value={{ toastMaster, hideToast }}>
			{children}

			{toasts.map((toast) => (
				<ToastItem
					key={toast.id}
					toast={toast}
					setToasts={setToasts}
					onHide={hideToast}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			))}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};
