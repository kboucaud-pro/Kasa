import React from "react";
import { useParams } from "react-router-dom"

import Header from "../components/header";
import Footer from "../components/footer";
import AboutCategory from "../components/about-category";

import "../styles/place.css";

import placesData from "../assets/logements.json";

function getRatingStars(rating) {
	let starsHtml = [];

	for (let index = 0; index < 5; index++) {
		if (rating > 0) {
			starsHtml.push(<i class="fa-solid fa-star star-full"></i>);
		} else {
			starsHtml.push(<i class="fa-solid fa-star star-empty"></i>);
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
				<div className="gallery"><img src={currentPlace.cover} alt={currentPlace.title} /></div>
				<div className="title-location-owner">
					<div className="title-location">
						<h3>{currentPlace.title}</h3>
						{currentPlace.location}
					</div>
					<div className="owner">{currentPlace.host.name}<img src={currentPlace.host.picture} alt={currentPlace.host.name} /></div>
				</div>
				<div className="tags-rating">
					<ul>{currentPlace.tags.map((tag) => (<li>{tag}</li>))}</ul>
					<span className="rating">{getRatingStars(currentPlace.rating).map((star) => (star))}</span>
				</div>
				<div className="description-equipments">
					<AboutCategory title="Description" description={currentPlace.description} />
					<AboutCategory title="Équipements" description={<ul>{currentPlace.equipments.map((equipment) => (<li>{equipment}</li>))}</ul>} />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Place;