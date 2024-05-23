declare module "react-toast-master" {
	import { ComponentType, ReactNode } from "react";

	export interface ToastOptions {
		type?: "success" | "error" | "info" | "loading" | "warning" | "basic" | "confirm";
		position?:
			| "top"
			| "topLeft"
			| "topRight"
			| "bottomLeft"
			| "bottom"
			| "bottomRight"
			| "middle"
			| "topFull"
			| "bottomFull";
		hideToast?: () => void;
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
	}

	export interface ToastContainerProps {
		type?: string;
		message?: string;
		bg?: string;
		transition?: string;
		position?: string;
		skew?: string;
		cancelButton?: boolean;
		shadow?: string;
		radius?: string;
		align?: string;
		hideToast?: () => void;
	}

	export function toastMaster(options?: ToastContainerProps): void;
	export function hideToast(): void;

	export const ToastProvider: ComponentType<ToastContainerProps>;
}
