import React from "react";
import "./Projects.css";
import github from "./github-mark-white.svg";

const projectsData = [
  {
    id: 1,
    title: "Tiny Search Engine",
    description:
      "Developed a web crawling program to retrieve and store webpages recursively from a seed URL, an indexing system to manage web document indices, and a querying module to handle search queries",
    link: "https://github.com/jeanmarcosp/tiny-search-engine",
  },
  {
    id: 2,
    title: "Blog Database",
    description: "Created a blog engine using a MongoDB database cluster, PyMongo, and Python. Kept track of posts, comments, delete and show functions.",
    link: "https://github.com/jeanmarcosp/blog-database",
  },
  {
    id: 3,
    title: "Personal Website",
    description: "Created a personal website to showcase my projects. Designed in Figma and coded using React.js and CSS",
    link: "https://github.com/jeanmarcosp/personal-website",
  },
  {
    id: 4,
    title: "Part of Speech Tags",
    description: "Developed a sentence parsing program in Java, leveraging a hidden Markov model and the Viterbi algorithm to assign parts of speech to individual words with maximum likelihood",
    link: "https://github.com/jeanmarcosp/part-of-speech-tagger",
  },
  {
    id: 5,
    title: "Seamless Copy/Paste",
    description: "Used least sqaures and gradients to seamlessly blend an object or texture from a source image into a target image. ",
    link: "https://github.com/jeanmarcosp/seamless-copy-paste",
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
