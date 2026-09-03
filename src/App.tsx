import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/personalDetails';
import EducationBg from './components/educationBg';
import PersonalExp from './components/personalExp';
import AboutMe from './components/aboutMe';
import Internship from './components/internship'; // Import your new page
import IndividualProjects from './components/individualProjects';
import GroupProjects from './components/groupProjects';
import Participation from './components/participation';

// Group your homepage elements together
const Home = () => (
  <>
    <nav className="navbar-banner">
      <div className="navbar-container">
        <div className="nav-links">
          <a href="#details" className="nav-btn">Details</a>
          <a href="#about" className="nav-btn">About Me</a>
          <a href="#experience" className="nav-btn">Experience</a>
          <a href="#education" className="nav-btn">Education</a>
        </div>
      </div>
    </nav>

    <main className="main-content">
      <section id="details" className="page-section"><PersonalDetails /></section>
      <section id="about" className="page-section"><AboutMe /></section>
      <section id="education" className="page-section"><EducationBg /></section>
      <section id="experience" className="page-section"><PersonalExp /></section>
    </main>
  </>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="portfolio-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internship />} />
          <Route path="/individualProjects" element={<IndividualProjects />} />
          <Route path="/groupProjects" element={<GroupProjects />} />
          <Route path="/participation" element={<Participation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;