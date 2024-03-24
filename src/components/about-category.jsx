import React, { useState } from "react";

function AboutCategory({ title, description }) {

	const [categoryDisplay, setCategoryDisplay] = useState(false);
	const [chevronDown, setChevronDown] = useState(true);

	function handleDisplayClick() {
		setCategoryDisplay(!categoryDisplay);
		setChevronDown(!chevronDown);
	}

	let chevronClassName = "fa-solid fa-chevron-down "+ (chevronDown ? "chevron-up-animation" : "chevron-down-animation");

	return (
		<div className="about-category">
			<span className="category-title">{title}<i onClick={handleDisplayClick} className={chevronClassName} ></i></span>
			<div className={categoryDisplay ? "category-shown" : "category-hidden"}>
				<span className="category-description">{description}</span>
			</div>
		</div>
	)
}

export default AboutCategory;