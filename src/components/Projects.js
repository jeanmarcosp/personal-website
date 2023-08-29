import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2.',
    link: 'https://example.com/project2',
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {projectsData.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
