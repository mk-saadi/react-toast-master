import "../styles/textColor.css";
import "../styles/breakPoints.css";

const LoadFooter = ({ toastAlignment, toastBG, loadFooter }) => (
	<div className={`_footer toast_width reveal_ani ${toastAlignment} ${toastBGClasses[toastBG]}`}>
		{loadFooter}
	</div>
);

const toastBGClasses = {
	dark: "footer_dark",
	warning: "footer_dark",
	white: "footer_white",
	info: "footer_info",
	error: "footer_error",
	success: "footer_success",
	gray: "footer_success",
	glass: "footer_success",
	transparent: "footer_success",
	grWarning: "footer_success",
	grError: "footer_success",
};

export default LoadFooter;
