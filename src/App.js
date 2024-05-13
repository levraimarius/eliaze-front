import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Vote from "./pages/Vote/Vote";
import TownAndNation from "./pages/TownAndNation/TownAndNation";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/villes-et-nations" element={<TownAndNation />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
