import React from 'react';
import ResumePdf from './SeanCone_cv.pdf';

function Resume() {
    return (
      <section className="my-5">
        <h1 id="about">Resume</h1>
        <div class="section-content">
          <p>Front-end Proficiencies: REACT, Bootstrap, CSS, HTML</p>
          <p>Back-end Proficiencies: JavaScript, Node, Express, MySQL, NoSQL (MongoDB)</p>
            <p>Click <a href={ResumePdf} target="_blank" rel="noopener noreferrer">here</a> to view my resume.</p>
        </div>
      </section>
    );
  }

export default Resume;