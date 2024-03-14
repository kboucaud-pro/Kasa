import React from "react";

import logo from "../assets/LOGO.png"
import { Link } from "react-router-dom";

function Header () {
	return (
		<header>
			<img src={logo} alt="logo" />
			<div className="header-links">
				<Link to={'/'} className="header-link">Accueil</Link>
				<Link to={'/about'} className="header-link">A propos</Link>
			</div>
		</header>
	)
}

export default Header;