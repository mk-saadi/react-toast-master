/**
 * Returns the animation that should be used when hiding a toast, based on the
 * current animation and position of the toast.
 *
 * @param {String} toastAnimation The animation that is currently being used to show the toast.
 * @param {String} toastPG The position of the toast (top/bottom/topFull/bottomFull).
 * @returns {String} The animation that should be used to hide the toast.
 */
export const getAnimation = (toastAnimation, toastPG) => {
	let animation;

	switch (toastAnimation) {
		case "ani_top":
			animation = "ani_slide_out_up";
			break;
		case "ani_down":
			animation = "ani_slide_out_down";
			break;
		case "ani_left":
			animation = "ani_slide_out_left";
			break;
		case "ani_right":
			animation = "ani_slide_out_right";
			break;
		case "ani_jelly":
			animation = "ani_jelly_out";
			break;
		case "ani_zoom":
			animation = "ani_zoom_out";
			break;
		default:
			animation = "ani_fade_out";
	}

	// Check if the toast is full and apply the appropriate animation
	if (toastPG === "bottomFull" || toastPG === "topFull") {
		animation = "ani_fade_out_full";
	}

	return animation;
};
