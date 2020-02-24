import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';
import Axios from 'axios';

const Transfers = (props) => {

    const history = useHistory();

    const [transfers, setTransfers] = useState([]);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        let claims = validate(cookies.JWT);
        Axios.get(`http://localhost:8081/api/v1/account/byUserId/${claims.id}`, {
            headers: { JWT: cookies.JWT }
        }).then(res => {
            let allTransfers = []
            const { data } = res;
            if (data) {
                data.forEach(account => {
                    Axios.get(`http://localhost:8081/api/v1/transfer/byAccountId/${account.id}`, {
                        headers: { JWT: cookies.JWT }
                    }).then(res => {
                        setTransfers([...allTransfers, res.data]);
                    }).catch(e => {

                    });
                });
            }
        }).catch(e => {

        });
    }, [cookies]);

    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
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
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transfers.map(transfer => {
                                return <tr>
                                    <td>{transfer.transferNumber}</td>
                                    <td>{transfer.transferDescription}</td>
                                    <td>{transfer.transferDate}</td>
                                    <td> <Link><i className="fas fa-eye"></i></Link></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default Transfers;

