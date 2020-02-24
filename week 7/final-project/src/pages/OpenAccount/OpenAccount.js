import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';
import Axios from 'axios';
//import './NewTransfer.scss';

const OpenAccount = () => {

    const history = useHistory();

    const [currency, setCurrency] = useState("CRC");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("0.00");

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
    }, [cookies]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const claims = validate(cookies.JWT);
        if (claims) {
            const account = {
            accountNumber: Math.floor((Math.random() * 100000000) + 1000000000),
            balance: "0.00",
            currency: currency,
            userId: claims.id
        }
        console.log(account)
        Axios.post(`http://localhost:8081/api/v1/account`, account, {
            headers: { JWT: cookies.JWT }
        })
            .then(res => {
                history.goBack();
            }).catch(e => {
                console.log(e);
            });
        }
    }


    const handleCancel = () => { history.goBack(); }

    const handleDescription = event => {
        setDescription(event.target.value);
    };

    const handleCurrency = event => {
        setCurrency(event.target.value);
    };

    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <div className="block-section container">
                    <div className="block-section-header">
                        <h3 className="block-section-header-text">Open Account</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Currency</label>
                            <select className="form-control" id="currency" onChange={handleCurrency}>
                                <option value="CRC" selected>CRC</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input className="form-control" type="text" required onChange={handleDescription} />
                        </div>
                        <button type="cancel" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-success">Open</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default OpenAccount;