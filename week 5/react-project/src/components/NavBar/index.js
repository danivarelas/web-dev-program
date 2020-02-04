import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/calendar">Calendar</Link>
                    <Link className="nav-item nav-link" to="/events">Events</Link>
                    <Link className="nav-item nav-link" to="/goals">Goals</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;