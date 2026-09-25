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
          <p className="timeline-date">Language: React and Typescript</p>
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box">
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              My inspiration came from myself. I always wish to have my own
              personalised website that able to track my health status including
              meals and exercise as well as act like my personal assistant that
              can remind me about my stuff. That's why I came up with this idea 
              to build my own PA. 
            </p>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Headless Hook Architecture:</strong> Decoupled business 
                logic, storage sync, and API interactions from UI components 
                via modular custom hooks (<code>useAuth</code>, 
                <code>useCalorieAnalyzer</code>, and <code>useHealthBot</code>).
              </li>
              <li>
                <strong>Multimodal Vision AI:</strong> Integrated Gemini Flash 
                to estimate meal calories from base64 image uploads, enforcing 
                strict JSON output schemas to prevent parser drift.
              </li>
              <li>
                <strong>Conversational Health Assistant:</strong> Built an 
                interactive advisor featuring optimistic UI updates and 
                multi-turn state tracking for structured lifestyle guidance.
              </li>
              <li>
                <strong>Auth & Profile Onboarding:</strong> Implemented Google 
                OAuth and Firebase Realtime Database sync, enforcing a 
                multi-stage gateway to capture baseline vitals prior to 
                dashboard access.
              </li>
              <li>
                <strong>Environmental Health Telemetry:</strong> Combined HTML5 
                Geolocation with the OpenWeatherMap API to compute real-time 
                workout precautions based on heat, rain, and humidity thresholds.
              </li>
              <li>
                <strong>Automated Routine Scheduling:</strong> Engineered an 
                offline-first medication tracker in <code>localStorage</code> 
                featuring active interval polling and dynamic midnight timeouts 
                for daily state resets.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/NicoleLeeChiaQi/Fitness-Health-Website.git">
            <p className="btn">Source Code</p>
            </a>
          </div>
          <h2>💤Dream Studio</h2>
          <p className="timeline-date">Language: React and Typescript</p>
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box">
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              I come out with this idea after a conversation with a friend that has insomnia.
              Hence, I started to think how to help people like her and eventually I thought of
              this idea which input voice of person they like maybe a DJ and text they wish to 
              hear to help them get into bed easily. Soft and calm background music together with
              the voice that gives the sense of belongings create a soothing environment that somehow
              acts like a lullaby.  
            </p>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Frontend Architecture &amp; State Mixing: </strong>
                  Built with React and TypeScript via Vite, managing 
                  multi-channel audio states for independent volume sliders, 
                  speech speed controls (0.65× – 1.0×), looping, and playback 
                  status.
              </li>
              <li>
                <strong>Client-Side Audio Engineering &amp; Synthesis Pipeline: 
                </strong>
                  Uses the MediaRecorder API to capture voice samples and a 
                  custom regex tokenizer to split long stories into manageable 
                  sentence chunks; assembled audio buffersare then stitched and 
                  encoded into valid WAV files directly in the browser usingthe 
                  Web Audio API and low-level binary DataView operations.
              </li>
              <li>
                <strong>Distributed AI Voice Cloning Backend: </strong>
                  Bridges the client to a remote Google Colab GPU running F5-TTS 
                  and a Vocos vocoder via @gradio/client, performing zero-shot 
                  voice cloning from short audio references without requiring 
                  local GPU hardware.
              </li>
              <li>
                <strong>Headless Background Audio &amp; Sleep Automation: 
                </strong>
                  Integrates an invisible YouTube IFrame API player for ambient 
                  soundscapes, paired with an automated sleep timer that applies 
                  a synchronized 30-second linear volume fade-out across both 
                  voice and background tracks before stopping.
              </li>
              <li>
                <strong>Offline-First Persistence via IndexedDB: </strong>
                  Implements local browser storage using IndexedDB to store 
                  synthesized audio Blobs, story titles, and timestamps, 
                  allowing instant offline playback, track management, and file 
                  exports without re-running model inference.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/NicoleLeeChiaQi/Dream-Studio">
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