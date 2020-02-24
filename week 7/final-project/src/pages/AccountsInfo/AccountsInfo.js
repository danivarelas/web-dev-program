import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Axios from 'axios';
import Transfers from '../Transfers/Transfers';

const AccountsInfo = (props) => {

    const history = useHistory();

    const [accounts, setAccounts] = useState([]);
    const [cards, setCards] = useState([]);

    const accountId = props.match.params.accountId;
    console.log(accountId)

    const [cookies, removeCookie] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        removeCookie('JWT', { path: '/' });
        history.push("/login");
    }

    useEffect(() => {
        const claims = validate(cookies.JWT);
        if (claims) {
        }
    }, [cookies]);

    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <div >
                    <h2 className="page-title">Account Information</h2>
                </div>
                <Transfers accountId={accountId} />
            </div>
        </div>
    );

}

export default AccountsInfo;