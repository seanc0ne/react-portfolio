import React, { useState } from 'react';
import ResumePdf from './SeanCone_cv.pdf';

function Resume() {
    return (
      <section className="my-5">
        <h1 id="about">Resume</h1>
        <div class="section-content">
            <p>Click <a href={ResumePdf} target="_blank">here</a> to view my resume.</p>
        </div>
      </section>
    );
  }

export default Resume;