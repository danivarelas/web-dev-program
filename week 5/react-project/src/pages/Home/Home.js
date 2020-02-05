import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="bg">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-content-background">

                    </div>
                    <div className="home-content-text">
                        <h1>Training App</h1>
                        <p>Create plans, track your progress and log your results.</p>
                        <Link className="btn" to="/dashboard/races">View Dashboard</Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Home;