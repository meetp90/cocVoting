import React from "react";
import "./Glass.css";
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
					<div className="content text-white">
						<h2 className="title2">Features</h2>
						<ol className="text-left">
						<li  className="text-white my-2">1. Decentralized Governance</li>
						<li className="text-white  my-2">2. Tamper-Proof Votes</li>
						<li className="text-white my-2">3. Increased Accessibility</li>
						<li className="text-white my-2">4. Multiple Voting Methods</li>
						</ol>
					</div>
					<background style={{ float: "right" }} alt="vector-img" />
				</div>

				<div className="card">
					<div className="content">
						<h2 className="title2">About Us</h2>
						<p className="text-white text-justify">As a cutting-edge technology company, we recognize the importance of a secure and transparent voting process. Our blockchain-based platform for decentralized governance is designed to address the issues faced by centralized voting systems, such as lack of transparency, vulnerability to fraud, and slow vote-counting processes.</p>
					</div>
				</div>
				<div className="card">
					<div className="content">
					<h2 className="title2">Follow these easy steps</h2>
					<ol className="text-left">
						<li  className="text-white my-2">1. Register yourself by filling the required details</li>
						<li className="text-white  my-2">2. Signin as user</li>
						<li className="text-white my-2">3. Go to vote option on dashboard</li>
						<li className="text-white my-2">4. Give security key</li>
						<li className="text-white my-2">5. Vote your candidate and submit</li>

						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
