import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA_WLLzCgTanR4qtPzdXI6961GJ7Mvezzc",
	authDomain: "igreels-475fb.firebaseapp.com",
	projectId: "igreels-475fb",
	storageBucket: "igreels-475fb.appspot.com",
	messagingSenderId: "990555732242",
	appId: "1:990555732242:web:cbfebf36b3437c93985bcb",
	measurementId: "G-7B6NRFF4RQ",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export default db;
export { storage };
