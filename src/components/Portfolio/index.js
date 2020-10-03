import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'something-vegan',
      title: 'Something Vegan',
      description: 'Vegan Recipe Aggregator',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, Server-side APIs',
      image: 'something-vegan-screenshot.png',
    },
    {
      name: 'budget-tracker',
      title: 'Budget Tracker',
      description: 'Budget Tracker',
      technologies: 'MongoDB, IndexedDB',
      image: 'budget-tracker-screenshot.png',
    },
    {
      name: 'team-profile-generator',
      title: 'Team Profile Generator',
      description: 'Team Profile Generator',
      technologies: 'JaveScript, Node.js',
      image: 'team-profile-generator.png',
    },
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js, Express.js, MySQL, Sequelize, bcrypt',
      image: 'shrinko-screenshot.png',
    },
    {
      name: 'note-taker',
      title: 'Note Taker',
      description: 'Note Taker',
      technologies: 'JavaScript, Express.js',
      image: 'note-taker-screenshot.png',
    },
    {
      name: 'weather-app',
      title: 'Weather Dashboard',
      description: 'Weather Forecast Dashboard',
      technologies: 'HTML, CSS, Bootstrap, JavaScript, Moment.js, OpenWeather API',
      image: 'weather-dashboard-screenshot.png',
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <img
            src={require(`../../assets/images/portfolio/${project.image}`)}
            alt={project.title}
            className="img-thumbnail mx-1"
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;