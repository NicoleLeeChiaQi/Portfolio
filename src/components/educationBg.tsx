/* function EducationBg() {
    return (
        <div className="profile-container">
            <div className="details-column">
                <h1 className="name-heading">Education Background</h1>

                <div className="divider"></div>

                <ul className="info-list">
                    <li>
                        <strong>SMJK Sin Min</strong>
                        <p>Result: 11A+</p>
                    </li>
                    <li>
                        <strong>Koley Yayasan UEM (KYUEM)</strong>
                        <p>Result: 3A* 1A</p>
                    </li>
                    <li>
                        <strong>Imperial College London</strong>
                        <p>Result: Haven't released</p>
                    </li>
                </ul>
            </div>
        </div>


    );
}
*/

function EducationBg() {
  return (
    <div className="timeline-section">
      <h1 className="name-heading">Education Background</h1>
      <div className="divider"></div>
      {/* The main outer wrapper that holds all timeline items */}
      <div className="timeline-container">
        
        {/* TIMELINE ITEM 1 */}
        <div className="timeline-item">
          {/* The dot marker */}
          <div className="timeline-dot"></div>
          {/* The content card */}
          <div className="timeline-content">
            <span className="timeline-date">2025 - Present</span>
            <h3>Imperial College London</h3>
            <p className="degree">BEng/MEng Computing</p>
            <p className="details">
                <strong>Results:</strong> Haven't Released 
                <br /> {/*New Line*/}
                First Year student focusing on Functional Programming (Haskell), Low-Level Systems Architecture, and ARMv8 Assembly programming.
            </p>
          </div>
        </div>

        {/* TIMELINE ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2023 - 2025</span>
            <h3>Kolej Yayasan UEM (KYUEM)</h3>
            <p className="degree">A-Levels</p>
            <p className="details">
                <strong>Results: </strong>3A* 1A 
                <br />
                Achieved strong academic foundations required for core computing theory and discrete mathematical structures.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2018 - 2023</span>
            <h3>SMJK Sin Min</h3>
            <p className="degree">High School</p>
            <p className="details">
                <strong>Results: </strong>11A+ 
                <br />
                Achieved strong academic foundations required for core computing theory and discrete mathematical structures.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2012 - 2017</span>
            <h3>SJK(C) Sin Min A</h3>
            <p className="degree">Primary School</p>
            <p className="details">
                <strong>Results: </strong>8A 
                <br />
                Achieved strong academic foundations required for core computing theory and discrete mathematical structures.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default EducationBg;