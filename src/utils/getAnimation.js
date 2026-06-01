export const getAnimation = (toastAnimation, positionKey) => {
	const animationMap = {
		ani_top: "ani_slide_out_up",
		ani_down: "ani_slide_out_down",
		ani_left: "ani_slide_out_left",
		ani_right: "ani_slide_out_right",
		ani_jelly: "ani_jelly_out",
		ani_zoom: "ani_zoom_out",
		ani_fade: "ani_fade_out",
	};

	// Default to fade-out if no match
	let closingAnimation = animationMap[toastAnimation] || "ani_fade_out";

	// Special case for full-width toasts
	if (positionKey && ["bottomFull", "topFull"].includes(positionKey)) {
		closingAnimation = "ani_fade_out_full";
	}

	return closingAnimation;
};
