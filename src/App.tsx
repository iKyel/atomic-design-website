import React from "react";
import "./App.css";
import HomePage from "./components/04-pages/HomePage";
import TinMoi from "./components/04-pages/TinMoi";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news-detail/:id" element={<TinMoi />} />
      </Routes>
    </Router>
  );
}

export default App;
