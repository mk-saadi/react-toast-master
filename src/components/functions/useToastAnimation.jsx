import { useEffect } from "react";

const useToastAnimation = (showToast, hideToast) => {
	useEffect(() => {
		// Check if the toast is closing
		if (!showToast && hideToast) {
			// Get the reveal animation class
			const revealAnimationClass = showToast || "";

			// Trigger the closing animation after a short delay
			setTimeout(() => {
				// Apply the closing animation class
				const closingAnimationClass = revealAnimationClass.replace("ani_", "ani_fade_out_");
				// Add the closing animation class to the toast component
				const toastElement = document.querySelector(".outer_container");
				if (toastElement) {
					toastElement.classList.add(closingAnimationClass);
				}
			}, 50); // Adjust the delay as needed

			// Remove the closing animation class after the animation duration
			setTimeout(() => {
				const toastElement = document.querySelector(".outer_container");
				if (toastElement) {
					toastElement.classList.remove(closingAnimationClass);
				}
			}, 500); // Adjust the duration as needed (500ms in this example)
		}
	}, [showToast, hideToast]);
};

export default useToastAnimation;
