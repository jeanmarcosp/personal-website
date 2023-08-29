import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
