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
                            <p>Fitness & Health Website</p>
                        </li>
                    </ul>
                    <ul className="info-list">
                        <li>
                            <strong>Group Projects</strong>
                            <p>
                                <a href="https://github.com/NicoleLeeChiaQi/Mario-Game/tree/main/extension" className="card-link">Mario Game</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default PersonalExp;