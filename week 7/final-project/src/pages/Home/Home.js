import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';

const Home = () => {

    const history = useHistory();

    const [cookies, removeCookie] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        removeCookie('JWT', { path: '/' });
        history.push("/login");
    }

    return(
        <div className="wrapper">
            <div id="content">
                <Navbar/>

            </div>
        </div>
    );

}

export default Home;