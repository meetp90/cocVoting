import React, { useEffect, useState } from "react";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from "./firebase";
import { Video } from "./Video";
import "./HelpMe.css";
import Faq from "react-faq-component";
import Navbar from "../components/Navbar";

const data = {
	title: "FAQS",
	rows: [
		{
			title: "What is the app about?",
			content: `A blockchainbased
      platform for decentralized governance that enables stakeholders to vote and
      make decisions in a secure and transparent manner can address these issues and
      promote trust and accountability in the voting process.`,
		},
		{
			title: "Is it free?",
			content: "",
		},
		{
			title: "Where is blockchain being used in the app?",
			content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
		},
	],
};

const styles = {
	// bgColor: 'white',
	titleTextColor: "blue",
	rowTitleColor: "blue",
	// rowContentColor: 'grey',
	// arrowColor: "red",
};

const config = {
	animate: true,
	// arrowIcon: "V",
	tabFocus: true,
};

export const HelpMe = () => {
	const [reels, setReels] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "learn"));
		onSnapshot(q, (snapshot) => {
			setReels(snapshot.docs.map((doc) => doc.data()));
			console.log(snapshot.docs);
		});
		// console.log(reels);
	}, []);

	return (
		<>
			<Navbar />
			<div className="card" style={{ backgroundColor: "black" }}>
				{/* <h1>Lets build A ig reels clone</h1> */}
				<div
					style={{ margin: "20px", paddingTop: "20px", textAlign: "center" }}
				>
					<h1 style={{ fontSize: "4em" }}>Quick overview </h1>
					<p style={{ color: "white" }}>
						To give you an idea of what the app is about.
					</p>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					backgroundColor: "black",
					height: "100vh",
				}}
			>
				<div className="videos">
					{reels.map(({ url }) => (
						<Video url={url} />
					))}
				</div>
			</div>
			<div>
				<Faq data={data} styles={styles} config={config} />
			</div>
		</>
	);
};
