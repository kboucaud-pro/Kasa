
import React, { useState } from "react";

function Carousel(pictures) {
	let picturesArray = pictures.pictures;

	let [currentPicture, setCurrentPicture] = useState(0);

	function clickPreviousPicture() {
		if (currentPicture === 0) {
			setCurrentPicture(picturesArray.length - 1);
		} else {
			setCurrentPicture(currentPicture - 1)
		}
	}

	function clickNextPicture() {
		if (currentPicture === picturesArray.length - 1) {
			setCurrentPicture(0);
		} else {
			setCurrentPicture(currentPicture + 1)
		}
	}

	if (picturesArray.length === 1) {
		let picturePath = picturesArray[0].split("/");
		let pictureAlt = picturePath[picturePath.length - 1];

		return (
			<div className="carousel">
				<img src={picturesArray[0]} alt={pictureAlt} />
			</div>
		)
	}

	let previousPicturePath = currentPicture === 0 ? picturesArray[picturesArray.length - 1] : picturesArray[currentPicture - 1];
	let currentPicturePath = picturesArray[currentPicture];
	let nextPicturePath = currentPicture === picturesArray.length - 1 ? picturesArray[0] : picturesArray[currentPicture + 1];

	return (
		<div className="carousel">
			<img className="previousPicture previousPictureSlide" src={previousPicturePath} alt="previousPicture"/>
			<span className="fa-solid fa-chevron-left previousPictureButton" onClick={clickPreviousPicture}></span>
			<img className="currentPicture" src={currentPicturePath} alt="currentPicture"/>
			<span className="fa-solid fa-chevron-right nextPictureButton" onClick={clickNextPicture}></span>
			<img className="nextPicture" src={nextPicturePath} alt="nextPicture"/>
		</div>
	)
}

export default Carousel;