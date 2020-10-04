import React, { useState } from 'react';
import { render } from 'react-dom';
import ResumePdf from 'SeanCone_cv.pdf';
import { Document, Page } from 'react-pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
    //   <section className="my-5">
    //     <h1 id="about">Resume</h1>
    //     <div class="section-content">
    //         <p>Click <a href="../../assets/images/SeanCone_cv.pdf" target="_blank">here</a> to view my resume.</p>
    //     </div>
    //   </section>
    <div>
    <Document
      file="SeanCone_cv.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
  </div>
    );
  }

export default Resume;