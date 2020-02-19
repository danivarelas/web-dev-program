import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import './Sidebar.scss';

const Sidebar = () => {

    const history = useHistory();

    const [active, setActive] = useState("");
    const [user, setUser] = useState("");

    const [cookies, removeCookie] = useCookies(['JWT']);

    useEffect(() => {
        setUser(validate(cookies.JWT));
    }, [user, cookies]);

    const toggleSidebar = () => {
        if ("active" === active) {
            setActive("");
        } else {
            setActive("active");
        }
    }

    return (

        <nav className={active + " bg-secondary"} id="sidebar">
            <div class="sidebar-header bg-secondary">
                <div className="header-btn-close">
                    <button type="button" id="sidebarCollapse" className="btn btn-outline-danger" onClick={toggleSidebar}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div className="header-title">
                    <h3>Hello, {user}</h3>
                </div>
            </div>
            <ul class="list-unstyled components">
                <li><Link to="/home">Summary</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
                <li><Link to="/credit-cards">Credit Cards</Link></li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Payments</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><Link to="/payments">View Payments</Link></li>
                        <li><Link to="/payments/services">Pay Services</Link></li>
                        <li><Link to="/payments/credit-cards">Pay Credit Cards</Link></li>
                    </ul>
                </li>
                <li><Link to="/transfers">Transfers</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>

    );
}

export default Sidebar;

