import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';

const Home = () => {

    const history = useHistory();

    const [cookies, setCookie, removeCookie] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        removeCookie('JWT', { path: '/' });
        history.push("/login");
    }

    return(
        <div class="wrapper">
            <Sidebar/>
            <div id="content">
                <Navbar/>

            </div>
        </div>
    );

}

export default Home;