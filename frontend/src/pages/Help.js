import React, { useEffect, useState } from "react";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from "./firebase";
import { Video } from "./Video";
import "./Help.css";

export const Help = () => {
	const [reels, setReels] = useState([]);
	useEffect(() => {
		const q = query(collection(db, "reels"));
		onSnapshot(q, (snapshot) =>
			setReels(snapshot.docs.map((doc) => doc.data()))
		);
		console.log(reels);
	}, []);
	return (
		<div className="trauma-card">
			{/* <h1>Lets build A ig reels clone</h1> */}
			<div style={{ margin: "20px", paddingTop: "20px" }}>
				<h1 style={{ fontSize: "4em" }}>PTSD Measures</h1>
				<p style={{ fontSize: "1.25em", maxWidth: "600px" }}>
					If you're finding yourself in a tangle of anxious thoughts or
					experiencing some of the physical symptoms associated with anxiety,
					know that you're not alone—many of us are right there with you.
					<br></br>
					<br></br>
					Studies have shown that anxiety reducing videos turn out to be useful
					in order to cope better with stress or PTSD.
				</p>
			</div>

			<div className="app_videos">
				{reels.map(({ url }) => (
					<Video url={url} />
				))}
			</div>
		</div>
	);
};
