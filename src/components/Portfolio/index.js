import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'whr',
      title: 'World Happiness Report',
      description: 'Data Visualization',
      technologies: 'd3.js | leaflet.js | geojson | python | pandas',
      image: 'screen-shot-whr.png',
    },
    {
      name: 'covie',
      title: 'CoVie Search',
      description: 'Dashboard',
      technologies:
        'html | css | bootstrap | js | Plotly.js | server-side APIs',
      image: 'screen-shot-coviesearch.png',
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
      image: 'note-taker-screenshot,png',
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