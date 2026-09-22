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
                <strong>Results:</strong> Expected first class
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
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EducationBg;