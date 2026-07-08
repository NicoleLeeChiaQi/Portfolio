import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OL1 from '../assets/OL1.jpeg';
import OL2 from '../assets/OL2.jpeg';
import OL3 from '../assets/OL3.jpeg';
import OL4 from '../assets/OL4.jpeg';

function Internship() {
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
        <h1 className="name-heading">My Internship Journey</h1>
        <div className="divider"></div>

        {/* SECTION 1: OPENLAUNCH */}
        <section id="openlaunch" className="internship-detail-section">
          <h2>🏢 OpenLaunch Start-up Company</h2>
          <p className="timeline-date">June 2025 - July 2025 | Software Engineering Intern</p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h3 className="box-project-title">National AI Competition (NAIC) Voting Platform</h3>
            
            <h4 className="sub-heading-tag">Project Overview</h4>
            <p className="box-description">
              For the National AI Competition (NAIC), I developed a high-performance,
              responsive voting web application designed to handle high-traffic 
              user engagement seamlessly. My primary objective was to build a 
              secure, intuitive, and visually engaging interface capable of 
              processing user interactions smoothly while maintaining optimal 
              rendering speeds and application stability during peak voting 
              windows.
            </p>
            
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Frontend Architecture:</strong> I built the platform using Next.js 
                and React, leveraging rendering strategies like server-side rendering 
                (SSR) and static site generation (SSG) where appropriate to minimize 
                initial page load times and optimize Core Web Vitals. I designed a 
                modular, reusable component architecture that ensured clean state 
                management and fluid user transitions.
              </li>
            </ul>
            <br/>
            <h3 className="box-project-title">CV Semantic Search</h3>
            <h4 className="sub-heading-tag">Project Overview</h4>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <br/>
            <p>Other than.... </p>
          </div>

          {/* AUTO-SCROLLING MARQUEE GALLERY FOR OPENLAUNCH */}
          <div className="gallery-slider">
            <div className="gallery-track">
              {/* FIRST SET OF IMAGES */}
              <img src={OL1} alt="OL 1" className="gallery-img" />
              <img src={OL2} alt="OL 2" className="gallery-img" />
              <img src={OL3} alt="OL 3" className="gallery-img" />
              <img src={OL4} alt="OL 4" className="gallery-img" />

              {/* REPEATED SET FOR SEAMLESS INFINITE LOOP */}
              <img src={OL1} alt="OL 1 duplicate" className="gallery-img" />
              <img src={OL2} alt="OL 2 duplicate" className="gallery-img" />
              <img src={OL3} alt="OL 3 duplicate" className="gallery-img" />
              <img src={OL4} alt="OL 4 duplicate" className="gallery-img" />
            </div>
          </div>
        </section>

        {/* SECTION 2: FUTURE INTERNSHIP PLACEHOLDER */}
        {/* 
        <section id="future-company" className="internship-detail-section">
          <h2>🏢 Future Trading Firm / Company</h2>
          <p className="timeline-date">Upcoming Experience</p>
          <div className="internship-box empty-box">
            <p className="box-description">Details about your next software engineering or electronic trading system role will go here...</p>
          </div>
        </section>
        */}
      </div>
    </div>
  );
}

export default Internship;