import React from "react";

function AboutCategory({ title, description }) {
	const displayAboutSection = (e) => {
		var aboutSection = e.target.parentNode.nextSibling;

		if (aboutSection.classList.contains("category-hidden")) {
			aboutSection.classList.remove("category-hidden");
			aboutSection.classList.add("category-shown");
		} else if (aboutSection.classList.contains("category-shown")) {
			aboutSection.classList.remove("category-shown");
			aboutSection.classList.add("category-hidden");
		}

		if (e.target.classList.contains("chevron-up-animation")){
			e.target.classList.remove("chevron-up-animation");
			e.target.classList.add("chevron-down-animation");
		} else if (e.target.classList.contains("chevron-down-animation")){
			e.target.classList.remove("chevron-down-animation");
			e.target.classList.add("chevron-up-animation");
		}
	}

	return (
		<div className="about-category">
			<span className="category-title">{title}<i onClick={displayAboutSection} className="fa-solid fa-chevron-down chevron-up-animation"></i></span>
			<div className="category-hidden">
				<span className="category-description">{description}</span>
			</div>
		</div>
	)
}

export default AboutCategory;