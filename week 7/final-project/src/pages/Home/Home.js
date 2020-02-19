import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';

const Home = () => {

    const [active, setActive] = useState("");

    const [cookies, setCookies] = useCookies(['JWT']);

    const toggleSidebar = () => {
        if ("active" === active) {
            setActive("");
        } else {
            setActive("active");
        }
    }

    return (
        <div><Navbar></Navbar></div>
    );
}

export default Home;