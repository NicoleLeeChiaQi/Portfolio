import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Participation() {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash anchor in the URL (e.g., #openlaunch), find it and scroll to it
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Adds a slight timeout to ensure the page structure is fully drawn first
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="profile-container2">
      <div className="details-column">
        {/* Navigation back link */}
        <Link to="/" className="back-btn">← Back</Link>
        <h1 className="name-heading">Participation</h1>
        <div className="divider"></div>

        {/* SECTION 1: OPENLAUNCH */}
        <section id="spark" className="internship-detail-section">
          <h2>SPARK Case Study Competition</h2>
          <p className="timeline-date">Oct 2025</p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h4 className="sub-heading-tag">Reflection</h4>
            <p className="box-description">
              ...
            </p>
          </div>

          {/* AUTO-SCROLLING MARQUEE GALLERY FOR OPENLAUNCH */}
          {/* 
          <div className="gallery-slider">
            <div className="gallery-track">
              {/* FIRST SET OF IMAGES 
              <img src={OL1} alt="OL 1" className="gallery-img" />
              <img src={OL2} alt="OL 2" className="gallery-img" />
              <img src={OL3} alt="OL 3" className="gallery-img" />
              <img src={OL4} alt="OL 4" className="gallery-img" />

              {/* REPEATED SET FOR SEAMLESS INFINITE LOOP 
              <img src={OL1} alt="OL 1 duplicate" className="gallery-img" />
              <img src={OL2} alt="OL 2 duplicate" className="gallery-img" />
              <img src={OL3} alt="OL 3 duplicate" className="gallery-img" />
              <img src={OL4} alt="OL 4 duplicate" className="gallery-img" />
            </div>
          </div>
          */}
        </section>

        <section id="trading" className="internship-detail-section">
          <h2>CME x Kancil Capital Trading Competition</h2>
          <p className="timeline-date">April 2026</p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h4 className="sub-heading-tag">Reflection</h4>
            <p className="box-description">
              ...
            </p>
          </div>

          {/* AUTO-SCROLLING MARQUEE GALLERY FOR OPENLAUNCH */}
          {/* 
          <div className="gallery-slider">
            <div className="gallery-track">
              {/* FIRST SET OF IMAGES 
              <img src={OL1} alt="OL 1" className="gallery-img" />
              <img src={OL2} alt="OL 2" className="gallery-img" />
              <img src={OL3} alt="OL 3" className="gallery-img" />
              <img src={OL4} alt="OL 4" className="gallery-img" />

              {/* REPEATED SET FOR SEAMLESS INFINITE LOOP 
              <img src={OL1} alt="OL 1 duplicate" className="gallery-img" />
              <img src={OL2} alt="OL 2 duplicate" className="gallery-img" />
              <img src={OL3} alt="OL 3 duplicate" className="gallery-img" />
              <img src={OL4} alt="OL 4 duplicate" className="gallery-img" />
            </div>
          </div>
          */}
        </section>
      </div>
    </div>
  );
}

export default Participation;

