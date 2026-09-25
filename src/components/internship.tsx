import { useEffect } from 'react';
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
            
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>High-Traffic Voting Webpage:</strong> Collaborated in a cross-functional team to develop and deploy a high-traffic voting platform via Vercel, reliably handling over 1,000 unique voters.
              </li>
              <li>
                <strong>Responsive Frontend Architecture:</strong> Engineered a modern, component-driven user interface utilizing Next.js and React to deliver seamless mobile and desktop cross-device performance.
              </li>
              <li>
                <strong>Anti-Fraud & State Integrity:</strong> Implemented secure cookie-based session tracking and integrated Qdrant to eliminate duplicate voting and preserve ballot integrity.
              </li>
            </ul>
            <a href="https://github.com/NicoleLeeChiaQi/voting-app">
            <p className="btn">Source Code</p>
            </a>
            <br/>
            <h3 className="box-project-title">CV Semantic Search</h3>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Candidate Matching Engine:</strong> Developed a semantic retrieval tool leveraging Gemini Flash dense embeddings to surface the top 10 most compatible candidates against job descriptions.
              </li>
              <li>
                <strong>Vector Optimization & Scoring:</strong> Architected a Qdrant vector database and engineered a custom cosine similarity algorithm with section-weighted scoring across candidate profiles.
              </li>
              <li>
                <strong>ETL Chunking & Keyword UI:</strong> Designed a token-aware document chunking pipeline alongside an interactive keyword-matching interface to highlight candidate competencies.
              </li>
            </ul>
            <a href="https://github.com/NicoleLeeChiaQi/CV-Semantic-Search">
            <p className="btn">Source Code</p>
            </a>
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