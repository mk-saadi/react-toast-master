import { TOAST_STYLES } from "../../constants/index.js";
import "../styles/textColor.css";
import "../styles/breakPoints.css";

const Footer = ({ footer, toastAlignment, toastBG }) => (
	<div className={`_footer toast_width ${toastAlignment} ${TOAST_STYLES.footerClasses[toastBG]}`}>{footer}</div>
);

export default Footer;
