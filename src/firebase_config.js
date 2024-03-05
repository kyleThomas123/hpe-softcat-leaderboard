import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEArowSS-HRNf2WdVqrz967p9Br0-i2BA",
    authDomain: "softcatleaderboard.firebaseapp.com",
    projectId: "softcatleaderboard",
    storageBucket: "softcatleaderboard.appspot.com",
    messagingSenderId: "385195349354",
    appId: "1:385195349354:web:02a7729acdee798edd4113",
    measurementId: "G-0701CNK6XT",
    databaseURL: "https://softcatleaderboard-default-rtdb.europe-west1.firebasedatabase.app/"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const firestore = getFirestore();

export { auth, database, analytics, firestore}