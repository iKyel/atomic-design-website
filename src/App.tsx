/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
// import Header from './components/Header';
// import Ads from './components/Ads';
// import NavBar from './components/NavBar';
// import Banner from './components/Banner';
// import Content from './components/Content';
import HomePage from "./components/04-pages/HomePage";
import TinMoi from "./components/04-pages/TinMoi";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tin-moi" element={<TinMoi />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
