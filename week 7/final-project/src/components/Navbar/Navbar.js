import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import './Navbar.scss';

const Navbar = () => {

    const history = useHistory();

    const [active, setActive] = useState("");
    const [user, setUser] = useState("");

    const [cookies, removeCookie] = useCookies(['JWT']);

    useEffect(() => {
        setUser(validate(cookies.JWT));
    }, [user, cookies]);

    const handleLogout = () => {
        removeCookie('JWT', { path: '/' });
        history.push("/login");
    }

    const toggleSidebar = () => {
        if ("active" === active) {
            setActive("");
        } else {
            setActive("active");
        }
    }

    return (

        <div class="wrapper">
            <nav className={active + " bg-secondary"} id="sidebar">
                <div class="sidebar-header bg-dark">
                    <button type="button" id="sidebarCollapse" className="btn btn-outline-danger float-right" onClick={toggleSidebar}>
                        <i class="fas fa-times"></i>
                    </button>
                    <h3>Hello, {user}</h3>
                </div>
                <ul class="list-unstyled components">
                    <li><a href="#">Summary</a></li>
                    <li><a href="#">Credit cards</a></li>
                    <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Payments</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">View payments</a></li>
                            <li><a href="#">Pay services</a></li>
                            <li><a href="#">Pay cards</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Transfers</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>


            <div id="content">
                <nav className="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn btn-outline-secondary mr-4" onClick={toggleSidebar}>
                            <i class="fas fa-align-left"></i>
                        </button>
                        <Link className="navbar-brand" to="/">PowerBank</Link>
                        <div className=" ml-auto">
                            <Link class="btn btn-outline-danger" type="button" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="overlay"></div>

            <div class="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="logoutModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Logout</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;

