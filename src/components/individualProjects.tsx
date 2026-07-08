import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function IndividualProjects() {
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
        <h1 className="name-heading">Individual Projects</h1>
        <div className="divider"></div>

        {/* SECTION 1: OPENLAUNCH */}
        <section id="fitness" className="internship-detail-section">
          <h2>🏋🏽💪🏼Fitness & Health Website</h2>
          <p className="timeline-date">Language: </p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h4 className="sub-heading-tag">Project Overview</h4>
            <p className="box-description">
              ...
            </p>
            
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                ...
              </li>
            </ul>
            <br/>
            <a href="https://github.com/NicoleLeeChiaQi/Fitness-Health-Website.git">
            <p className="btn">Source Code</p>
            </a>
          </div>

          {/* AUTO-SCROLLING MARQUEE GALLERY FOR OPENLAUNCH */}
          
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

export default IndividualProjects;

