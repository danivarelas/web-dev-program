import React from 'react';
import logo from '../../images/podium.png'
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="bg">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-content-background ">
                    <div className="home-content-text vertical-center">
                        <img src={logo} alt="logo"/>
                        <h1>Road To Podium</h1>
                        <p>The place where you can plan your races, track your progress and log your results.</p>
                        <Link className="btn" to="/dashboard">View Dashboard</Link>
                    </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    );
}

export default Home;