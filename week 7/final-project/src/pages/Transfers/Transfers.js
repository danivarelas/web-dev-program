import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Axios from 'axios';
import { format } from 'date-fns';

const Transfers = (props) => {

    const history = useHistory();

    const {accountId} = props;

    const [transfers, setTransfers] = useState([]);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        const claims = validate(cookies.JWT);
        if (claims) {
            Axios.get(`http://localhost:8081/api/v1/transfer/byAccountId/${accountId}`, {
                headers: { JWT: cookies.JWT }
            }).then(res => {
                setTransfers(res.data)
            }).catch(e => {
            });
        }
    }, [accountId, cookies]);

    return (
        <div className="block-section container">
            <div className="block-section-header">
                <div className="block-section-header-edit">
                    <Link to="/transfers/newTransfer">New Transfer</Link>
                </div>
                <h3 className="block-section-header-text">Transfers</h3>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map(transfer => {
                        return <tr>
                            <td>{transfer.transferNumber}</td>
                            <td>{transfer.transferDescription}</td>
                            <td>{transfer.transferDate}</td>
                            <td>{transfer.amount}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default Transfers;

