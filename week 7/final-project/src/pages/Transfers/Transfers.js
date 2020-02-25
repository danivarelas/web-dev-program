import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Axios from 'axios';
import TransfersList from '../../components/TransfersList/TransfersList';

const Transfers = (props) => {

    const history = useHistory();

    const { account } = props;

    const [transfersOut, setTransfersOut] = useState([]);
    const [transfersIn, setTransfersIn] = useState([]);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        const claims = validate(cookies.JWT);
        if (claims) {
            Axios.get(`http://localhost:8081/api/v1/transfer/byAccountId/${account.id}`, {
                headers: { JWT: cookies.JWT }
            }).then(res => {
                console.log(res.data)
                setTransfersOut(res.data);
            }).catch(e => {
            });
            Axios.get(`http://localhost:8081/api/v1/transfer/byTargetAccountId/${account.id}`, {
                headers: { JWT: cookies.JWT }
            }).then(res => {
                console.log(res.data)
                setTransfersIn(res.data);
            }).catch(e => {
            });
        }
    }, [account, cookies]);

    return (
        <div>
            <TransfersList transfers={transfersOut} account={account} title={"Outgoing transfers"} emptyMessage={"You haven't performed any transactions."} isOutgoing={true}/>
            <TransfersList transfers={transfersIn} account={account} title={"Incoming transfers"} emptyMessage={"You haven't received any transactions."} isOutgoing={false}/>
        </div>
    );

}

export default Transfers;
