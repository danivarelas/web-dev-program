import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Transfers from '../Transfers/Transfers';

const AccountsInfo = (props) => {

    const history = useHistory();

    const { account } = props.location.state;

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
                <div>
                    <h2 className="page-title">Account Information</h2>
                </div>
                <Transfers account={account} />
            </div>
        </div>
    );

}

export default AccountsInfo;
