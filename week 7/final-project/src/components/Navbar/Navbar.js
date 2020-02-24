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
        let claims = validate(cookies.JWT)
        if(claims){
            setUser(claims.name);
        }
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
        <div>
            <nav className={active} id="sidebar">
            <div className="sidebar-header">
                <div className="header-btn-close">
                    <button type="button" id="sidebarCollapse" className="btn btn-outline-danger" onClick={toggleSidebar}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="header-title">
                    <h3>Hello, {user}</h3>
                </div>
            </div>
            <ul className="list-unstyled components">
                <li className="sidebar-link"><Link to="/home">Summary</Link></li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Payments</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li className="sidebar-link"><Link to="/payments">View Payments</Link></li>
                        <li className="sidebar-link"><Link to="/payments/services">Pay Services</Link></li>
                        <li className="sidebar-link"><Link to="/payments/credit-cards">Pay Credit Cards</Link></li>
                    </ul>
                </li>
                <li className="sidebar-link"><Link to="/transfers/newTransfer">Transfer money</Link></li>
                <li className="sidebar-link"><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
            <nav className="navbar navbar-light bg-white">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-outline-secondary mr-4" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link className="navbar-brand" to="/">PowerBank</Link>
                    <div className=" ml-auto">
                        <button className="btn btn-outline-danger" type="button" data-toggle="modal" data-target="#logoutModal">Logout</button>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="logoutModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Logout</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;

