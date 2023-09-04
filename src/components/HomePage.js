// src/components/Home.js
import React from "react";
import "../styles/HomePage.css";
import hero from "../assets/homeimage.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="text">
          <div className="name">
            Hi, I’m <br />
            Jeanmarcos
          </div>
          <p className="bio">
            I am a senior at Dartmouth College pursuing Computer Science and
            Hispanic Studies. Passionate about technology and cultural
            exploration, I&#39;m on the lookout for opportunities in software
            engineering or product management. With a strong foundation in both
            disciplines, I&#39;m excited to contribute innovative solutions and
            drive impactful projects.
          </p>
        </div>
        <img className="rectangle" alt="Rectangle" src={hero} />
      </div>
    </div>
  );
};

export default HomePage;
