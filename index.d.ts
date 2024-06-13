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
			| "confirmDark";
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
		message?: "string";
		transition?: "zoom" | "fade" | "slide" | "down" | "up" | "left" | "right" | "jelly";
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
		bg?: "dark" | "white" | "info" | "error" | "success" | "gray" | "glass" | "transparent";
		align?: "left" | "right" | "center";
		footer?: ReactNode;
		loadFooter?: ReactNode;
	}

	/**
	 * The props for the ToastContainer.
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
	 * The functions exposed by the useToast hook.
	 */
	export interface ToastFunctions {
		toastMaster: (options?: ToastOptions) => void;
		hideToast: () => void;
	}

	/**
	 * The useToast hook.
	 * @returns The ToastFunctions.
	 */
	export function useToast(): ToastFunctions;

	/**
	 * The ToastProvider component.
	 */
	export const ToastProvider: ComponentType<ToastContainerProps>;
}
