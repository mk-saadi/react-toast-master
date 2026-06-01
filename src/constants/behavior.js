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
		animationClose: 300,
		loadingFooterDelay: 5330,
		loadingCloseButtonDelay: 5000,
		transitionDelay: 50,
	},
};
