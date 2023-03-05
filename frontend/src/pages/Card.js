import React from 'react';
import './Glass.css';
import VanillaTilt from "vanilla-tilt";
// const element = document.querySelectorAll('.card');

function Card() {
	React.useEffect(() => {
		const element = document.querySelectorAll(".card");
		VanillaTilt.init(element);
	}, []);

	return (
		<div className="home-cards-bg p-2" style={{ backgroundColor: "#121113" }}>
			<div className="container">
				<div className="card">
					<div className="content">
						<h1>1</h1>
						<h3>Register as a candidate</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
					</div>
					<background style={{ float: "right" }} alt="vector-img" />
				</div>

				<div className="card">
					<div className="content">
						<h1>2</h1>
						<h3>Upload 1 short video explaining your campaign</h3>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h1>3</h1>
						<h3>Voila.Your job is done. </h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
