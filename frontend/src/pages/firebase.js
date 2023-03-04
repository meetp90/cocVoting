import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCDv7qLaaDIStnqS45K2Fp4p-AMTGoGjR4",
	authDomain: "ig-reels-vv.firebaseapp.com",
	projectId: "ig-reels-vv",
	storageBucket: "ig-reels-vv.appspot.com",
	messagingSenderId: "51290762540",
	appId: "1:51290762540:web:15fb36b9aa20814eb21089",
	measurementId: "G-DDCFV4Y06L",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
