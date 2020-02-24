import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';

const Accounts = (props) => {

    const { accounts } = props;

    const history = useHistory();

    const [showAccounts, setShowAccounts] = useState(false);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        if (accounts && accounts.length) {
            setShowAccounts(true);
        } else {
            setShowAccounts(false);
        }
    }, [accounts, cookies]);

    return (
        <div className="block-section container">
            <div className="block-section-header">
                <div className="block-section-header-edit">
                    <Link to="/accounts/openAccount">Open account</Link>
                </div>

                <h3 className="block-section-header-text">Accounts</h3>
            </div>
            {!showAccounts && <p>You don't have any credit cards to your name.</p>}
            {showAccounts && <div>
                <p>This is the list of accounts linked to your profile.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Balance</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => {
                            return <tr>
                                <td>{account.accountNumber}</td>
                                <td>{account.balance + " " + account.currency}</td>
                                <td> <Link to={`/accounts/${account.id}`}><i className="fas fa-eye"></i></Link></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            }
        </div>
    );

}

export default Accounts;