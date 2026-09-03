import { Link } from 'react-router-dom';



function PersonalExp() {

    return (

        <div className="profile-container1">

            <div className="details-column">

                <h1 className="name-heading">Personal Experience</h1>



                <div className="divider"></div>

                <div className="profile-container">

                    <ul className="info-list">

                        <li>

                            <strong>Internship</strong>

                            <p>

                                <Link to="/internships#openlaunch" className="card-link">

                                📍 OpenLaunch start-up company

                                </Link>

                            </p>

                            <p>Date: June 2025 - July 2025</p>

                        </li>

                    </ul>

                    <ul className="info-list">

                        <li>

                            <strong>Individual Projects</strong>

                            {/* <p>

                                <Link to="/individualProjects#fitness" className="card-link">

                                🔹Fitness & Health Website

                                🔹Dream Studio

                                </Link>

                            </p> */}

                            <li>

                                <Link to="/individualProjects#fitness" className="card-link">

                                🔹Fitness & Health Website

                                </Link>                          

                            </li>

                            <li>

                                <Link to="/individualProjects#dreamStudio" className="card-link">

                                🔹Dream Studio

                                </Link>

                            </li>

                        </li>

                    </ul>

                    <ul className="info-list">

                        <li>

                            <strong>Group Projects</strong>

                            <p>

                                <Link to="/groupProjects#mariogame" className="card-link">

                                ⚡Mario Game

                                </Link>                          

                            </p>

                        </li>

                    </ul>

                    <ul className="info-list">

                        <li>

                            <strong>Participation</strong>

                            <li>

                                <Link to="/participation#spark" className="card-link">

                                ⭐️ SPARK Competition

                                </Link>                          

                            </li>

                            <li>

                                <Link to="/participation#trading" className="card-link">

                                ⭐️ CME x Kancil Capital Trading Competition

                                </Link>

                            </li>

                        </li>

                    </ul>

                </div>

            </div>

        </div>





    );

}


export default PersonalExp;