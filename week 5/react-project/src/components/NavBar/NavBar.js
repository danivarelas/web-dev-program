import React from 'react';
import './NavBar.scss';
import logo from '../../images/podium-white.png'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top logo" alt="logo"/>
                    Road To Podium<span className="sr-only">(current)</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars toggle-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/dashboard/races">Dashboard</Link>
                        <Link className="nav-item nav-link" to="/calendar">Calendar</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;