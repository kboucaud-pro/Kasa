import React from "react";
import { useParams } from "react-router-dom"

import Header from "../components/header";
import Footer from "../components/footer";
import AboutCategory from "../components/about-category";
import Carousel from "../components/carousel";

import "../styles/place.css";

import placesData from "../assets/logements.json";

function getRatingStars(rating) {
	let starsHtml = [];

	for (let index = 0; index < 5; index++) {
		let keyText = "star" + index;
		if (rating > 0) {
			starsHtml.push(<i className="fa-solid fa-star star-full" key={keyText}></i>);
		} else {
			starsHtml.push(<i className="fa-solid fa-star star-empty" key={keyText}></i>);
		}

		rating--;
	}

	return starsHtml;
}

function Place() {

	let params = useParams();
	const currentId = params.id;

	let currentPlace = undefined;
	placesData.forEach((placeData) => {
		if (placeData.id === currentId) {
			currentPlace = placeData;
		}
	});

	return (
		<div className="content">
			<Header />
			<div className="place-infos">
				<div className="gallery">
					<Carousel pictures={currentPlace.pictures} />
				</div>
				<div className="title-location-tags-rating-owner">
					<div className="title-location-tags">
						<h3>{currentPlace.title}</h3>
						{currentPlace.location}
						<ul>{currentPlace.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
					</div>
					<div className="rating-owner">
						<div className="owner">{currentPlace.host.name}<img src={currentPlace.host.picture} alt={currentPlace.host.name} /></div>
						<span className="rating">{getRatingStars(currentPlace.rating).map((star) => (star))}</span>
					</div>
				</div>
				<div className="description-equipments">
					<AboutCategory title="Description" description={currentPlace.description} />
					<AboutCategory title="Équipements" description={<ul>{currentPlace.equipments.map((equipment) => (<li key={equipment}>{equipment}</li>))}</ul>} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Place;