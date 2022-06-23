// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCdXaEMb30E7vSselsj39_yO9uj_xRlByU",
	authDomain: "netflixx-155f0.firebaseapp.com",
	projectId: "netflixx-155f0",
	storageBucket: "netflixx-155f0.appspot.com",
	messagingSenderId: "100422178742",
	appId: "1:100422178742:web:02a7707adbd305f839d317",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
