import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import LeaderBoard from "./pages/LeaderBoard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hpe-softcat-leaderboard" element={<Layout />}>
          <Route path="/hpe-softcat-leaderboard/" index element={<Home />} />
          <Route path="/hpe-softcat-leaderboard/LeaderBoard" element={<LeaderBoard />} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
