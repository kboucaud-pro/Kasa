import React from "react";

import logo from "../assets/LOGO.png"
import { Link } from "react-router-dom";

function Header () {
	return (
		<header>
			<img src={logo} alt="logo" />
			<div className="header-links">
				<Link to={'/'}><span className="header-link">Accueil</span></Link>
				<Link to={'/about'}><span className="header-link">A propos</span></Link>
			</div>
		</header>
	)
}

export default Header;