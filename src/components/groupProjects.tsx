import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function GroupProjects() {
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
        <h1 className="name-heading">Group Projects</h1>
        <div className="divider"></div>

        {/* SECTION 1: OPENLAUNCH */}
        <section id="mariogame" className="internship-detail-section">
          <h2>🍄🎮Mario Game</h2>
          <p className="timeline-date">Language: C</p>
          
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box"> 
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              We come out with this idea is to release stress and at the same 
              time experience how to develop a game from scratch such as 
              syncing the keyboard input with the mario movement, how to build
              the map, how to create obstacles that pop up randomly and other
              visual effect. 
            </p>
            
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Modular Core Architecture & State Management 
                  (C & Raylib): </strong>
                  Structured the engine around a unified MasterGame context 
                  using C structs and memory-efficient unions, handling discrete 
                  game loops, title/game-over states, 2D camera viewport 
                  scrolling, and multi-channel audio streaming.
              </li>
              <li>
                <strong>Custom 2D Kinematics & Sub-Step Collision Engine: </strong>
                  Implemented custom platformer physics incorporating gravity, 
                  terminal velocity, friction, and variable-height jumping; 
                  resolved high-speed tunneling through tile grids using 
                  multi-iteration sub-step ray-marching and axis-independent 
                  grid alignment (round_tile).
              </li>
              <li>
                <strong>Dynamic Entity Management & Object Pooling: </strong>
                  Managed active game objects via fixed-capacity array pools 
                  (MAX_ENEMIES, MAX_PIPES) to avoid runtime dynamic allocations, 
                  supporting enemy patrol AI with wall-rebound logic and 
                  procedural hazard spawner algorithms validating ground 
                  continuity.
              </li>
              <li>
                <strong>Embedded Hardware & Multi-Input Abstraction: </strong>
                  Abstracted control mechanisms through an InputState interface 
                  combining native desktop keyboard events with low-level 
                  Raspberry Pi GPIO hardware pin queries (ReadPiGPIO) for arcade 
                  cabinet integration.
              </li>
              <li>
                <strong>Real-Time Level Streaming & Grid Baking: </strong>
                  Parsed plain-text ASCII map layouts (level1.txt) into a 2D 
                  collision matrix (15 x 200) with procedural runtime baking, 
                  dynamically carving and injecting solid obstacle boundaries as 
                  animated warp pipes deploy.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/NicoleLeeChiaQi/Mario-Game/tree/main/extension">
            <p className="btn">Source Code</p>
            </a>
          </div>
        </section>
        <section id="sudokusolver" className="internship-detail-section">
          <h2>🔢🎲✏️Sudoku Solver</h2>
          <p className="timeline-date">Language: Haskell</p>
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box">
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              Our inspiration come when we try to solve a very challenging 
              sudoku with the least number provided. 
            </p>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Constraint Propagation & Backtracking:</strong> Built a 
                hybrid solver that accelerates search via deterministic 
                constraint reduction (naked singles worklists) and falls back to 
                minimum-remaining-values (MRV) backtracking.
              </li>
              <li>
                <strong>Custom Ternary Tree (Tri) Structure:</strong> Designed 
                an immutable 3-way branching tree (<code>Tri a</code>) with 
                logarithmic indexing and updates to efficiently represent and 
                mutate 81-cell board states.
              </li>
              <li>
                <strong>Pure State-Driven Architecture:</strong> Decoupled UI 
                and domain logic by isolating side-effects from a deterministic, 
                pure state machine (<code>UIState</code> and 
                <code>handleEvent</code>) driven by discrete user actions.
              </li>
              <li>
                <strong>Raw Terminal TUI Engine:</strong> Implemented a 
                low-level terminal interface featuring ANSI escape sequences, 
                raw-mode buffering controls via <code>bracket</code>, and an 
                asynchronous keyboard parser for smooth navigation and live 
                editing.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/kuanzhiti/SudokuSolver">
            <p className="btn">Source Code</p>
            </a>
          </div>
        </section>
        <section id="cartoonizeImg" className="internship-detail-section">
          <h2>🐻🧸Cartoonize Image</h2>
          <p className="timeline-date">Language: Python</p>
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box">
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              Recently, images with various of effects has been mushrooming in
              the internet especially the glowstick dance inspire us about this 
              project. Hence, we come out with an idea of building our own
              funny effects that can change according to our real time 
              movement. 
            </p>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Two-Stage Stylization Pipeline:</strong> Decoupled image 
                cartoonization into parallel color abstraction and edge 
                generation pipelines, merging painterly color regions with crisp 
                ink lines using bitwise masking.
              </li>
              <li>
                <strong>Adaptive Color Quantization:</strong> Implemented 
                multi-pass bilateral filtering accelerated via Gaussian image 
                pyramids (<code>pyrDown</code>/<code>pyrUp</code>), combined 
                with CIELAB K-Means clustering and fast HSV binning for flat 
                posterized shading.
              </li>
              <li>
                <strong>Dual-Mode Edge Extraction:</strong> Built an outline 
                detection engine combining median blur denoising with selectable 
                adaptive mean thresholding (for hand-drawn ink styles) and 
                inverted Canny edge detection.
              </li>
              <li>
                <strong>Interactive Tuning & Live Processing: </strong> 
                Engineered a real-time OpenCV desktop control suite supporting 
                static images and webcam feeds, featuring memoized parameter 
                caching, preset synchronization, and dynamic trackbar 
                adjustments.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/kuanzhiti/MLcartooning">
            <p className="btn">Source Code</p>
            </a>
          </div>
        </section>
        <section id="numRecognition" className="internship-detail-section">
          <h2>1️⃣6️⃣ Number Recognition</h2>
          <p className="timeline-date">Language: Python</p>
          {/* THE INTERNSHIP DESCRIPTION CONTAINER BOX */}
          <div className="internship-box">
            <h4 className="sub-heading-tag">Inspiration</h4>
            <p className="box-description">
              Not must of inpiration, but we go through some youtube video and 
              found this project was quite interesting as we get to train the 
              model even though most of the samples we took are from MNIST 
              library. 
            </p>
            <h4 className="sub-heading-tag">Technical Breakdown</h4>
            <ul className="box-list">
              <li>
                <strong>Data Pipeline & Augmentation:</strong> Built a PyTorch 
                ETL pipeline using <code>torchvision</code> incorporating 
                real-time geometric augmentations (affine shifts, rotations) and 
                channel-wise normalization to improve model generalization.
              </li>
              <li>
                <strong>Computer Vision Preprocessing:</strong> Engineered an 
                OpenCV and SciPy alignment pipeline featuring dynamic 
                thresholding, aspect-ratio preservation, and center-of-mass 
                translation to bridge the gap between arbitrary user handwriting 
                and MNIST format.
              </li>
              <li>
                <strong>Live Inference GUI:</strong> Developed an interactive 
                Tkinter and PIL desktop drawing canvas supporting antialiased 
                stroke capture, real-time pre-processing, and low-latency 
                forward-pass model inference with confidence scoring.
              </li>
              <li>
                <strong>Evaluation & Diagnostics:</strong> Automated model 
                performance benchmarking with Scikit-Learn, Matplotlib, and 
                Seaborn, generating per-class classification metrics 
                (Precision, Recall, F1), confusion matrix heatmaps, and 
                misclassification visual strips.
              </li>
            </ul>
            <br/>
            <a href="https://github.com/NicoleLeeChiaQi/MLNumRecognition">
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

export default GroupProjects;

