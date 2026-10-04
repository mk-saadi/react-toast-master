import { TOAST_STYLES } from "../../constants/index.js";
import "../styles/textColor.css";
import "../styles/breakPoints.css";

const LoadFooter = ({ toastAlignment, toastBG, loadFooter }) => (
	<div className={`_footer toast_width reveal_ani ${toastAlignment} ${TOAST_STYLES.footerClasses[toastBG]}`}>
		{loadFooter}
	</div>
);

export default LoadFooter;
