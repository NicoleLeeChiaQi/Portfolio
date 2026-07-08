import profileImg from '../assets/cv_pic.jpeg'; // Adjust path if it's in assets

function PersonalDetails() {
  return (
    <div className="profile-container">
      
      {/* LEFT COLUMN: Picture */}
      <div className="image-frame">
        <img 
          src={profileImg} 
          alt="Profile Picture" 
          className="profile-pic"
        />
      </div>

      {/* RIGHT COLUMN: Text */}
      <div className="details-column">
        {/* <span className="welcome-tag">Welcome to my portfolio</span> */}
        <h1 className="name-heading">Nicole Chia Qi Lee</h1>
        <p className="title-text">Computing Student at Imperial College London</p>
        
        <div className="divider"></div>

        <ul className="info-list">
          <li>🎓 <strong>Education:</strong> BEng Computing (First Year)</li>
          <li>📍 <strong>Location:</strong> London, UK</li>
          <li>☎️ <strong>Contact:</strong> (🇬🇧) +44 7887 003 656 / (🇲🇾) +6011 5989 4412</li> 
          <li>📩 <strong>Email:</strong> nicoleleecq@gmail.com</li> 
          <li>🔗 <strong>LinkedIn: </strong>  </li>
        </ul>
      </div>

    </div>
  );
}

export default PersonalDetails;