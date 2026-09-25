import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s1 from '../assets/spark1.jpeg';
import s2 from '../assets/spark2.jpeg';
import s3 from '../assets/spark3.jpeg';
import s4 from '../assets/spark4.jpeg';


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
              I entered the competition hoping to meet new people and hear 
              different perspectives. Our challenge was to help an 
              underrepresented community, so my team decided to tackle the 
              gender gap in tech. Through our research, we found that women are 
              significantly underrepresented, often due to an early awareness 
              gap in technical areas like computer hardware. Our solution was a 
              female-led platform offering courses and mentorship specifically 
              for women. We didn’t end up winning, but the judges pointed out 
              critical flaws we had overlooked, particularly concerning actual 
              market demand. In the end, the competition was a valuable lesson 
              in conducting thorough market validation and understanding our 
              users' real needs before building a product.
            </p>
          </div>

          {/* AUTO-SCROLLING MARQUEE GALLERY FOR OPENLAUNCH */}
          <div className="gallery-slider">
            <div className="gallery-track">
              {/* FIRST SET OF IMAGES */}
              <img src={s1} alt="spark 1" className="gallery-img" />
              <img src={s2} alt="spark 2" className="gallery-img" />
              <img src={s3} alt="spark 3" className="gallery-img" />
              <img src={s4} alt="spark 4" className="gallery-img" />

              {/* REPEATED SET FOR SEAMLESS INFINITE LOOP */}
              <img src={s1} alt="spark 1 duplicate" className="gallery-img" />
              <img src={s2} alt="spark 2 duplicate" className="gallery-img" />
              <img src={s3} alt="spark 3 duplicate" className="gallery-img" />
              <img src={s4} alt="spark 4 duplicate" className="gallery-img" />
            </div>
          </div>
        </section>

        <section id="trading" className="internship-detail-section">
          <h2>CME x Kancil Capital Trading Competition</h2>
          <p className="timeline-date">April 2026</p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h4 className="sub-heading-tag">Reflection</h4>
            <p className="box-description">
              I entered this competition out of curiosity to explore how trading 
              works in practice. Even though I didn't place, I learned a lot 
              about interpreting charts and analyzing market trends. More 
              importantly, it helped me build the right mindset: staying 
              disciplined, keeping greed in check and not hesitating when a 
              good opportunity comes up.
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

