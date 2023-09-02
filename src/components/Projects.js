import React from "react";
import "./Projects.css";
import github from "./github-mark-white.svg";

const projectsData = [
  {
    id: 1,
    title: "Tiny Search Engine",
    description:
      "Consisted of 3 programs: crawler, indexer, and querier that parsed web pages and stored words in order to return URLs with highest occurrence of given input.",
    link: "https://google.com",
  },
  {
    id: 2,
    title: "Tiny Search Engine",
    description: " test.",
    link: "https://google.com",
  },
  {
    id: 3,
    title: "Tiny Search Engine",
    description: " test2.",
    link: "https://google.com",
  },
  {
    id: 4,
    title: "Tiny Search Engine",
    description: " test3.",
    link: "https://google.com",
  },
];

const Projects = () => {
  const handleButtonClick = () => {
    window.open("https://google.com", "_blank"); // Replace with your desired URL
  };

  return (
    <div className="box">
      {projectsData.map((card) => (
        <div className="overlap-group" key={card.id}>
          <div className="title">{card.title}</div>
          <p className="desc">{card.description}</p>
          <button className="button" onClick={handleButtonClick}>
            <div className="label">
              <div className="labeltext">VIEW ON GITHUB</div>
              <img className="icon" alt="Icon" src={github} />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
