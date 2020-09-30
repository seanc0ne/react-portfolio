import React, {useState} from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/images/5.jpg";

function Portfolio(props) {
//   const currentCategory = {
//     name: "Sean",
//     description:
//       "Photos of Madonna",
//   };
  const [projects] = useState([
      {
        name: 'Madonna 1',
        category: 'Self-titled',
        technologies: '1983'
      },
      {
        name: 'Madonna 2',
        category: 'Like A Virgin',
        technologies: '1984'
      },
      {
        name: 'Madonna 3',
        category: 'True Blue',
        technologies: '1986'
      },
      {
        name: 'Madonna 4',
        category: 'Who\'s That Girl',
        technologies: '1987'
      },
      {
        name: 'Madonna 5',
        category: 'Like A Prayer',
        technologies: '1989'
      },
      {
        name: 'Madonna 6',
        category: 'I\'m Breathless',
        technologies: '1990'
      },
  ])
    return (
        <div>
          <div className="flex-row">
            {projects.map((project, i) => (
              <img
                src={require(`../../assets/images/${i}.jpg`)}
                alt={project.name}
                className="img-thumbnail mx-1"
                key={project.name}
              />
            ))}
          </div>
        </div>
    );
}
export default Portfolio;