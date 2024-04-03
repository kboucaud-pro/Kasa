import React from "react";

import logo from "../assets/LOGO.png"
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<img src={logo} alt="logo" />
			<div className="header-links">
				<NavLink to="/"className={({ isActive }) => isActive ? "active" : "inactive"}>Accueil</NavLink>
				<NavLink to="/about" className={({ isActive}) => isActive ? "active" : "inactive"}>A propos</NavLink>
			</div>
		</header>
	)
}

export default Header;