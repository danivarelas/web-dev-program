import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import { format, parseISO } from 'date-fns';

const TransfersList = (props) => {

    const { transfers, account, title, emptyMessage, isOutgoing } = props;

    const history = useHistory();

    const [showTransfers, setShowTransfers] = useState(false);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        if (transfers && transfers.length) {
            setShowTransfers(true);
        } else {
            setShowTransfers(false);
        }
    }, [transfers, cookies]);

    return (
        <div className="block-section container">
            <div className="block-section-header">
                {isOutgoing && <div className="block-section-header-edit">
                    <Link to="/transfers/newTransfer">New Transfer</Link>
                </div>}
                <h3 className="block-section-header-text">{title}</h3>
            </div>
            {!showTransfers && <p>{emptyMessage}</p>}
            {showTransfers && <div>
                <h4>Outgoing transfers</h4>
                <div className="table-responsive-md">
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
                                    <td>{format(parseISO(transfer.transferDate), 'dd/MM/yyyy')}</td>
                                    <td>{`${transfer.amount} ${account.currency}`}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            }
            
        </div>
    );

}

export default TransfersList;