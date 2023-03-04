import React, { useEffect, useState } from "react";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from "./firebase";
import { Video } from "./Video";
import "./Help.css";
import {
	ref,
	uploadBytesResumable,
	getDownloadURL,
	uploadBytes,
	listAll,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
export const Help = () => {
	const [reels, setReels] = useState([]);
	const [file, setFile] = useState(null);
	const videolistRef = ref(storage, "videos/");
	const uploadImage = () => {
		if (file == null) return;

		const fileRef = ref(storage, `videos/${file.name + v4()}`);
		uploadBytes(fileRef, file).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setvideoList((prev) => [...prev]);
				// console.log(video);
			});
			alert("Video Uploaded");
		});
	};

	const [video, setvideoList] = useState([]);

	useEffect(() => {
		listAll(videolistRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setvideoList((prev) => [...prev, url]);
					// console.log(video);
					video.map((url) => {
						setReels(url);
					});
				});
			});
		});
	}, []);

	useEffect(() => {
		const q = query(collection(db, "reels"));
		onSnapshot(q, (snapshot) => {
			setReels(snapshot.docs.map((doc) => doc.data()));
			console.log(snapshot.docs);
		});
		console.log(reels);
	}, []);

	// const [file, setFile] = useState(""); // progress
	// const [percent, setPercent] = useState(0); // Handle file upload event and update state
	// function handleChange(event) {
	// 	setFile(event.target.files[0]);
	// }

	// const handleUpload = () => {
	// 	if (!file) {
	// 		alert("Please upload an image first!");
	// 	}

	// 	const storageRef = ref(db, `/files/${file.name}`);
	// 	const uploadTask = uploadBytesResumable(storageRef, file);

	// 	uploadTask.on(
	// 		"state_changed",
	// 		(snapshot) => {
	// 			const percent = Math.round(
	// 				(snapshot.bytesTransferred / snapshot.totalBytes) * 100
	// 			);

	// 			setPercent(percent);
	// 		},
	// 		(err) => console.log(err),
	// 		() => {
	// 			getDownloadURL(uploadTask.snapshot.ref).then((url) => {
	// 				console.log(url);
	// 			});
	// 		}
	// 	);
	// };

	return (
		<>
			<div className="trauma-card">
				{/* <h1>Lets build A ig reels clone</h1> */}
				<div
					style={{ margin: "20px", paddingTop: "20px", textAlign: "center" }}
				>
					<h1 style={{ fontSize: "4em" }}>hi</h1>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexDirection: "row",
					maxWidth: "80%",
					margin: "auto",
				}}
			>
				<div style={{ maxWidth: "50%" }}>
					<h2 style={{ fontSize: "3em" }}>
						Deliver your message with{" "}
						<span
							style={{
								fontSize: "1.5em",
								fontWeight: "600",
								color: "#00e78d ",
							}}
						>
							POWER.
						</span>{" "}
						<br></br> Show your strengths and{" "}
						<span
							style={{ fontSize: "1em", fontWeight: "600", marginTop: "10px" }}
						>
							empower the future.
						</span>
					</h2>
				</div>
				<div className="app_videos">
					{reels.map(({ url }) => (
						<Video url={url} />
					))}
				</div>
			</div>
			<div>
				<input
					type="file"
					onChange={(event) => {
						setFile(event.target.files[0]);
					}}
				/>
				<button onClick={uploadImage}>Upload Image</button>
			</div>
			{/* <div>
				{video.map((url) => {
					return <video src={url} autoPlay />;
				})}
			</div> */}
			<div className="app_videos">
				{video.map((url) => (
					<Video url={url} />
				))}
			</div>
			{/* <div>
				<input type="file" onChange={handleChange} accept="/image/*" />
				<button onClick={handleUpload}>Upload to Firebase</button>
				<p>{percent} "% done"</p>
			</div> */}
		</>
	);
};
