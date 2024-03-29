
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

	return (
		<div className="carousel">
			<span className="fa-solid fa-chevron-left previousPictureButton" onClick={clickPreviousPicture}></span>
			<img className="currentPicture" src={picturesArray[currentPicture]} alt="currentPicture"/>
			<span className="fa-solid fa-chevron-right nextPictureButton" onClick={clickNextPicture}></span>
		</div>
	)
}

export default Carousel;