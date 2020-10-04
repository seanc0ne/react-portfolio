import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js, Express.js, MySQL, Sequelize, bcrypt',
      image: 'shrinko-screenshot.png',
      repo: 'https://github.com/PetitsPoissons/admin-patient-system.git',
      deployed:'https://shrinko.herokuapp.com/'
    },
    {
      name: 'weather-app',
      title: 'Weather Dashboard',
      description: 'Weather Forecast Dashboard',
      technologies: 'HTML, CSS, Bootstrap, JavaScript, Moment.js, OpenWeather API',
      image: 'weather-dashboard-screenshot.png',
      repo: 'https://github.com/seanc0ne/weather-dashboard.git',
      deployed:'https://seanc0ne.github.io/weather-dashboard/'
    },
    {
      name: 'something-vegan',
      title: 'Something Vegan',
      description: 'Vegan Recipe Aggregator',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, Server-side APIs',
      image: 'something-vegan-screenshot.png',
      repo: 'https://github.com/seanc0ne/something-vegan.git',
      deployed:'https://seanc0ne.github.io/something-vegan/'
    },
    {
      name: 'team-profile-generator',
      title: 'Team Profile Generator',
      description: 'Team Profile Generator',
      technologies: 'JaveScript, Node.js',
      image: 'team-profile-generator-screenshot.png',
      repo: 'https://github.com/seanc0ne/team-profile-generator.git',
      deployed: 'https://www.youtube.com/watch?v=5C208Rxta2o'
    },
    {
      name: 'note-taker',
      title: 'Note Taker',
      description: 'Note Taker',
      technologies: 'JavaScript, Express.js',
      image: 'note-taker-screenshot.png',
      repo: 'https://github.com/seanc0ne/note-taker.git',
      deployed:'https://lit-reef-93078.herokuapp.com/'
    },
    {
      name: 'budget-tracker',
      title: 'Budget Tracker',
      description: 'Budget Tracker',
      technologies: 'MongoDB, IndexedDB',
      image: 'budget-tracker-screenshot.png',
      repo: 'https://github.com/seanc0ne/budget-tracker.git',
      deployed:'https://budget-tracker-sean.herokuapp.com/'
    },
  ]);
  return (
    <div>
      <div className="wrapper">
      {/* <h1 id="about">Portfolio</h1>
      <p></p> */}
        {projects.map((project) => (
          <div className="card">
          <div className="img-container">
          <img
              src={require(`../../assets/images/${project.image}`)}
              alt={project.title}
              className="img-thumbnail"
              key={project.name}
            />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {project.title}
              </li>
              <li>
                <strong>Description:</strong> {project.description}
              </li>
              <li>
                <strong>Technologies:</strong> {project.technologies}
              </li>
              <li>
                <strong>GitHub Repo:</strong> <a href={project.repo}>LINK</a>
              </li>
              <li>
                <strong>Deployed:</strong> <a href={project.deployed}>LINK</a>
              </li>
            </ul>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

