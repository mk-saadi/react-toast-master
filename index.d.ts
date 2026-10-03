declare module "react-toast-master" {
	import { ComponentType, ReactNode } from "react";

	/**
	 * The options for the toast.
	 */
	export interface ToastOptions {
		type?:
			| "success"
			| "successWhite"
			| "successDark"
			| "error"
			| "errorWhite"
			| "errorDark"
			| "info"
			| "infoWhite"
			| "infoStay"
			| "infoStayWhite"
			| "infoDark"
			| "infoStayDark"
			| "loading"
			| "loadingWhite"
			| "loadingDark"
			| "warning"
			| "warningWhite"
			| "warningStay"
			| "warningStayWhite"
			| "warningDark"
			| "warningStayDark"
			| "basic"
			| "basicDark"
			| "confirm"
			| "confirmDark"
			| "custom"
			| "customStay";
		position?:
			| "top"
			| "topLeft"
			| "topRight"
			| "bottomLeft"
			| "bottom"
			| "bottomRight"
			| "center"
			| "topFull"
			| "bottomFull";
		message?: string;
		transition?: "zoom" | "fade" | "down" | "top" | "left" | "right" | "jelly";
		cancelButton?: boolean;
		skew?: "three" | "six" | "twelve";
		shadow?:
			| "none"
			| "gray"
			| "block"
			| "error"
			| "white"
			| "dark"
			| "success"
			| "info"
			| "warning"
			| "around";
		radius?: "none" | "sm" | "md" | "lg" | "xl" | "twoXl" | "full";
		bg?: "dark" | "white" | "info" | "error" | "success" | "warning" | "gray" | "glass" | "transparent";
		align?: "left" | "right" | "center";
		timeout?: number;
		custom?: ReactNode;
		footer?: ReactNode;
		loadFooter?: ReactNode;
	}

	/**
	 * @deprecated Kept for backward compatibility. Toast options are described by `ToastOptions`.
	 */
	export interface ToastContainerProps {
		type: string;
		message: string;
		bg: string;
		transition: string;
		position: string;
		skew: string;
		cancelButton: boolean;
		shadow: string;
		radius: string;
		align: string;
		footer: ReactNode;
		loadFooter: ReactNode;
	}

	/**
	 * The props for the ToastProvider.
	 */
	export interface ToastProviderProps {
		children?: ReactNode;
	}

	/**
	 * The functions exposed by the useToast hook.
	 */
	export interface ToastFunctions {
		/**
		 * Fires a toast. Returns `void` for regular toasts, or a
		 * Promise<boolean> that resolves when a confirm-type toast
		 * is confirmed (true) or dismissed/cancelled (false).
		 */
		toastMaster: (options?: ToastOptions) => void | Promise<boolean>;
		hideToast: (id?: string) => void;
	}

	/**
	 * The useToast hook.
	 * @returns The ToastFunctions.
	 */
	export function useToast(): ToastFunctions;

	/**
	 * The ToastProvider component. Wraps the app and provides the toast context.
	 */
	export const ToastProvider: ComponentType<ToastProviderProps>;
}
