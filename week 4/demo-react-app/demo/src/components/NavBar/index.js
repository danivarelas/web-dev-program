import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Books App</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/author">Authors</Link>
                    <Link className="nav-item nav-link" to="/book">Books</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
