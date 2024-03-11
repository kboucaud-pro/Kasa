import React from "react";

function AboutCategory({title, description}) {
	const displayAboutSection = (e) => {
		console.log(e);
		var aboutSection = e.target.parentNode.nextSibling;

		console.log(aboutSection.classList);
		if (aboutSection.classList.contains("category-hidden")){
			aboutSection.classList.remove("category-hidden");
			aboutSection.classList.add("category-shown");
		} else if (aboutSection.classList.contains("category-shown")){
			aboutSection.classList.remove("category-shown");
			aboutSection.classList.add("category-hidden");
		}
	}

	return (
		<div className="about-category">
			<span className="category-title">{title}<i onClick={displayAboutSection} className="fa-solid fa-chevron-down"></i></span>
			<span className="category-description category-hidden">{description}</span>
		</div>
	)
}

export default AboutCategory;