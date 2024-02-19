import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import LeaderBoard from "./pages/LeaderBoard";
import PointsForm from "./pages/PointsForm";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hpe-softcat-leaderboard/" element={<Layout />}>
          <Route path="/hpe-softcat-leaderboard/" index element={<Home />} />
          <Route path="/hpe-softcat-leaderboard/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/hpe-softcat-leaderboard/PointsForm" element={<PointsForm />} />
          <Route path="/hpe-softcat-leaderboard/SignUp" element={<SignUp />} />
          <Route path="/hpe-softcat-leaderboard/SignIn" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
// eslint-disable-next-line
const auth = getAuth(app);
// eslint-disable-next-line
const database = getDatabase(app);
// eslint-disable-next-line
const analytics = getAnalytics(app);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
