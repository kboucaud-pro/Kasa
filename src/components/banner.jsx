import React from "react";

import banner from "../assets/home_background.png"

function Banner () {
	return (
		<div className="banner">
			<img src={banner} alt="banner" className="banner-picture" />
			<div className="shadow-box"></div>
			<span>Chez vous, partout et ailleurs</span>
		</div>
	)
}

export default Banner;