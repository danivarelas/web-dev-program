import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';

const CreditCards = () => {

    const history = useHistory();

    const [cookies, setCookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    return(
        <div class="wrapper">
            <div id="content">
                <Navbar/>
                
            </div>
        </div>
    );

}

export default CreditCards;