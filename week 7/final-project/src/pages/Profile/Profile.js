import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {

    const history = useHistory();

    const [cookies, setCookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
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

export default Profile;