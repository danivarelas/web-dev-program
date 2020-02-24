import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Axios from 'axios';
import Accounts from '../Accounts/Accounts';
import CreditCards from '../CreditCards/CreditCards';

const Home = () => {

    const history = useHistory();

    const [accounts, setAccounts] = useState([]);
    const [cards, setCards] = useState([]);

    const [cookies, removeCookie] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        removeCookie('JWT', { path: '/' });
        history.push("/login");
    }

    useEffect(() => {
        let claims = validate(cookies.JWT);
        Axios.get(`http://localhost:8081/api/v1/account/byUserId/${claims.id}`, {
            headers: {JWT: cookies.JWT}
        }).then(res => {
            const { data } = res;
            setAccounts(data);
        }).catch(e => {

        });
        Axios.get(`http://localhost:8081/api/v1/creditCard/byUserId/${claims.id}`, {
            headers: {JWT: cookies.JWT}
        }).then(res => {
            const { data } = res;
            setCards(data);
        }).catch(e => {

        });
    }, [cookies]);

    return(
        <div className="wrapper">
            <div id="content">
                <Navbar/>
                <div >
                    <h2 className="page-title">Products Summary</h2>
                </div>
                <Accounts accounts={accounts}/>
                <CreditCards creditCards={cards}/>
            </div>
        </div>
    );

}

export default Home;