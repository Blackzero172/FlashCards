import React from "react";

import "./Popup.styles.css";
const Popup = ({ menuRef, children }) => {
	return (
		<div className="edit-menu hidden" ref={menuRef}>
			<div className="window">{children}</div>
		</div>
	);
};
export default Popup;
