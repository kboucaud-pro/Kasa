import React from "react";

import footer_logo from "../assets/FOOTER_LOGO.png";

function Footer () {
	return (
		<footer>
			<img src={footer_logo} alt="footer-logo" />
			<span className="copyright-text">© 2020 Kasa. All rights reserved</span>
		</footer>
	)
}

export default Footer;