import React from 'react';

const projects = [
  { title: 'Cook with Me!',
    description: 'Ingredients & step by step instructions for the best recipe of Shrimp & Chicken Alfredo.', 
    link: 'https://replit.com/@mscuttino94/JavaScript-Lab-11-DOM-Part-2?s=app' },
  { title: 'Calculate the Weather', 
    description: 'Check the average temperature and the maximum rainfall.', 
    link: 'https://replit.com/@mscuttino94/HTML-CSS-JS?s=app' },
  { title: 'Gag City News Site', 
    description: 'A few highlights of the dreamy utopia ruled by Minaj and her Barbz.', 
    link: 'https://replit.com/@mscuttino94/Bootstrap-Lab-3?s=app' },
];

const Projects = () => {
  return (
    <div>
      <h1 style={{ fontSize: '3em', color: 'magenta' }}>Projects</h1>
      <br></br>
      {projects.map((project, index) => (
        <div key={index}>
          <h2 style={{ fontSize: '2em'}}>{project.title}</h2>
          <br></br>
          <p style={{color: 'magenta' }}>{project.description}</p>
          <a className="m-1 text-emerald-500 hover:text-emerald-700" href={project.link}>View Project</a>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Projects;
