import { TOAST_STYLES } from "../../constants/index.js";
import "../styles/textColor.css";
import "../styles/breakPoints.css";

const InnerFooter = ({ footer, toastAlignment, toastBG }) => (
	<div className={`innerFooter ${toastAlignment} ${TOAST_STYLES.footerClasses[toastBG]}`}>{footer}</div>
);

export default InnerFooter;
