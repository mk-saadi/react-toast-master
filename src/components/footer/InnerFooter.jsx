import "../styles/textColor.css";
import "../styles/breakPoints.css";

const InnerFooter = ({ footer, toastAlignment, toastBG }) => (
	<div className={`innerFooter ${toastAlignment} ${toastBGClasses[toastBG]}`}>{footer}</div>
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

export default InnerFooter;
