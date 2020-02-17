import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';
import validate from '../../utils/JWTParser';

const Navbar = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['JWT']);
    const { history } = props;

    const loggedOutNav = () => {
        return  <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sign in
                        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link class="dropdown-item" to="/login">Login</Link>
                    <Link class="dropdown-item" to="/register">Register</Link>
                </div>
            </li>
    }

    const loggedInNav = () => {
        return <Link class="nav-item nav-link" onClick={handleLogout}>Logout</Link>
    }

    const handleLogout = () => {
        removeCookie('JWT', { path: '/' });
        return <Redirect to="/"></Redirect>
    }

    let nav;
    if (validate(cookies.JWT)) {
        nav = loggedInNav();
    } else {
        nav = loggedOutNav();
        //setNavOptions(nav);
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link" to="/users">Users</Link>
                    {nav}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;