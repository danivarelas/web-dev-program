import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, Switch, Route, useHistory } from 'react-router-dom';

const Payments = () => {

    const history = useHistory();

    const [cookies, setCookies] = useCookies(['JWT']);

    return(
        <div >
        </div>
    );

}

export default Payments;