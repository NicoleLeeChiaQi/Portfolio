import photo1 from '../assets/me1.jpeg';
import photo2 from '../assets/me2.jpeg';
import photo3 from '../assets/me3.jpeg';
import photo4 from '../assets/me4.jpeg';
import photo5 from '../assets/me5.jpeg';
import photo6 from '../assets/me6.jpeg';
import photo7 from '../assets/me7.jpeg';
import photo8 from '../assets/me8.jpeg';

function AboutMe() {
    return (
        <div className="profile-container">
            <div className="details-column">
                <h1 className="name-heading">About Me</h1>

                <div className="divider"></div>

                <p>
                    Hi there! Welcome to my page! I'm Nicole, 
                    a first-year Computing student at Imperial College 
                    London with a genuine love for solving puzzles through 
                    code. Beyond the technical logic, I am someone who 
                    thrives on curiosity, collaboration, and continuous 
                    growth—whether I'm building interactive projects with 
                    friends or diving into learning new languages like 
                    Japanese. I look at technology as a creative tool to 
                    build meaningful solutions, and I love taking on 
                    challenges that push me out of my comfort zone. When 
                    I'm not behind a screen, you'll probably find me 
                    exploring new places, brainstorming fresh ideas, or 
                    seeking out the next great learning adventure. I’m 
                    always eager to connect with fellow builders, 
                    creators, and tech enthusiasts, so feel free to 
                    explore my journey here or reach out! 
                    <br />
                    <br />
                    This is me. A girl that loves food, do sports and travel
                    around the world. 
                </p>

                {/* 1. THE AUTOMATED GALLERY WRAPPER */}
                <div className="gallery-slider">
                    <div className="gallery-track">
                        
                        {/* FIRST SET OF IMAGES */}
                        <img src={photo1} alt="Nicole 1" className="gallery-img" />
                        <img src={photo5} alt="Nicole 15" className="gallery-img" />
                        <img src={photo2} alt="Nicole 2" className="gallery-img" />
                        <img src={photo6} alt="Nicole 6" className="gallery-img" />
                        <img src={photo3} alt="Nicole 3" className="gallery-img" />
                        <img src={photo7} alt="Nicole 7" className="gallery-img" />
                        <img src={photo4} alt="Nicole 4" className="gallery-img" />
                        <img src={photo8} alt="Nicole 8" className="gallery-img" />

                        {/* CRITICAL TRICK: Duplicate the exact same images so the loop is seamless */}
                        <img src={photo1} alt="Nicole 1" className="gallery-img" />
                        <img src={photo5} alt="Nicole 15" className="gallery-img" />
                        <img src={photo2} alt="Nicole 2" className="gallery-img" />
                        <img src={photo6} alt="Nicole 6" className="gallery-img" />
                        <img src={photo3} alt="Nicole 3" className="gallery-img" />
                        <img src={photo7} alt="Nicole 7" className="gallery-img" />
                        <img src={photo4} alt="Nicole 4" className="gallery-img" />
                        <img src={photo8} alt="Nicole 8" className="gallery-img" />

                    </div>
                </div>
            </div>
        </div>


    );
}

export default AboutMe;