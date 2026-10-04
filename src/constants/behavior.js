export const TOAST_BEHAVIOR = {
	// Types that auto-hide
	autoHideTypes: [
		"success",
		"successWhite",
		"successDark",
		"error",
		"errorWhite",
		"errorDark",
		"warning",
		"warningWhite",
		"warningDark",
		"info",
		"infoWhite",
		"infoDark",
		"basic",
		"basicDark",
	],

	stayTypes: [
		"infoStay",
		"infoStayWhite",
		"infoStayDark",
		"warningStay",
		"warningStayWhite",
		"warningStayDark",
		"customStay",
	],

	customTypes: ["custom"],

	// Types that show an overlay
	overlayTypes: ["confirm", "confirmDark"],

	// Types that need special loading handling
	loadingTypes: ["loading", "loadingWhite", "loadingDark"],

	// Durations
	durations: {
		standard: 4500,
		afterHover: 1500,
		// Must match exit animation durations in components/styles/animation.css
		animationClose: 350, // all standard exit animations (0.35s)
		animationCloseFull: 500, // ani_fade_out_full (0.5s)
		loadingFooterDelay: 5330,
		loadingCloseButtonDelay: 5000,
		transitionDelay: 50,
	},
};
