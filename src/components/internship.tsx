import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <Link to="/" className="back-btn">← Back </Link>
        <h1 className="name-heading">My Internship Journey</h1>
        <div className="divider"></div>

        {/* SECTION 1: OPENLAUNCH */}
        <section id="openlaunch" className="internship-detail-section" style={{ marginBottom: '100vh' }}>
          <h2>🏢 OpenLaunch Start-up Company</h2>
          <p className="timeline-date">June 2025 - July 2025 | Software Engineering Intern</p>
          <div className="internship-box"> 
            <ul className="info-list" style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <strong>National AI Competition (NAIC) Voting Platform</strong>
                <p className="underline-word">Project Overview</p>
                <p>For the National AI Competition (NAIC), I developed a high-performance,
                    responsive voting web application designed to handle high-traffic 
                    user engagement seamlessly. My primary objective was to build a 
                    secure, intuitive, and visually engaging interface capable of 
                    processing user interactions smoothly while maintaining optimal 
                    rendering speeds and application stability during peak voting 
                    windows.
                </p>
                <p className="underline-word">Technical Breakdown</p>
                <li>
                    Frontend Architecture: I built the platform using Next.js 
                    and React, leveraging rendering strategies like server-side rendering 
                    (SSR) and static site generation (SSG) where appropriate to minimize 
                    initial page load times and optimize Core Web Vitals. I designed a 
                    modular, reusable component architecture that ensured clean state 
                    management and fluid user transitions.
                </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: PLACEHOLDER FOR FUTURE INTERNSHIP */}
        <section id="future-company" className="internship-detail-section">
          <h2>🏢 Future Trading Firm / Company</h2>
          <p className="timeline-date">Upcoming Experience</p>
          <p style={{ color: '#94a3b8' }}>Details about your next software engineering or electronic trading system role will go here...</p>
        </section>
      </div>
    </div>
  );
}

export default Internship;