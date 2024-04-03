import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/home.css";
import Banner from "../components/banner";

import placesData from "../assets/logements.json";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="content">
			<Header />
			<div className="banner-and-list">
				<Banner />
				<div className="place-list-background">
					<div className="place-list">
						{
							placesData.map(place => (
								<Link key={place.id} to={"/place/" + place.id}>
									<div className="place">
										<img src={place.cover} alt={place.title} />
										<span className="img-gradient"></span>
										<span className="place-title">{place.title}</span>
									</div>
								</Link>
							))
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home;