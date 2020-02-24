import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';
import Axios from 'axios';
import './NewTransfer.scss';

const NewTransfer = () => {

    const history = useHistory();

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [sourceAccountNumber, setSourceAccountNumber] = useState();
    const [targetAccountNumber, setTargetAccountNumber] = useState("");

    const [accounts, setAccounts] = useState([]);
    const [invalidAmount, setInvalidAmount] = useState(false);
    const [sameAccountt, setSameAccount] = useState(false);
    const [invalidAccount, setInvalidAccount] = useState(false);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        let claims = validate(cookies.JWT);
        Axios.get(`http://localhost:8081/api/v1/account/byUserId/${claims.id}`, {
            headers: { JWT: cookies.JWT }
        }).then(res => {
            const { data } = res;
            setAccounts(data);
            setSourceAccountNumber(data[0].accountNumber)
        }).catch(e => {

        });
    }, [invalidAmount, invalidAccount, cookies]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sourceAccountNumber !== targetAccountNumber) {
            setSameAccount(false);

            const validAmount = await checkAmount();
            const validAccount = await checkAccount(targetAccountNumber);

            if (!validAmount || !validAccount) {
                validAmount ? setInvalidAmount(false) : setInvalidAmount(true);
                validAccount ? setInvalidAccount(false) : setInvalidAccount(true);
            } else {
                const sourceAccountId = await checkAccount(sourceAccountNumber);
                const targetAccountId = await checkAccount(targetAccountNumber);
                //console.log(sourceAccountId)
                //console.log(targetAccountId)
                const transfer = {
                    transferNumber: ((Math.random() * 10000000) + 1),
                    transferDescription: description,
                    amount: amount,
                    transferDate: new Date(),
                    sourceAccountId: sourceAccountId.id,
                    targetAccountId: targetAccountId.id
                }
                console.log(transfer)
                /*Axios.post(`http://localhost:8081/api/v1/transfer`, transfer, {
                    headers: {JWT: cookies.JWT}
                })
                    .then(res => {
                        history.goBack();
                    }).catch(e => {
                        console.log(e);
                    });*/
            }
        } else {
            setInvalidAccount(false);
            setSameAccount(true);
        }
    }

    const checkAmount = async () => {
        if (amount > 0) {
            let res = await Axios.get(`http://localhost:8081/api/v1/account/${sourceAccountNumber}`, {
                headers: {
                    JWT: cookies.JWT,
                }
            })
            const { data } = res;
            console.log(data)
            console.log(amount)
            if (data.balance < amount) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    };

    const checkAccount = async (number) => {
        let res = await Axios.get(`http://localhost:8081/api/v1/account/${number}`, {
            headers: {
                JWT: cookies.JWT,
            }
        })
        return res.data.accountNumber ? res.data : null;
    };

    const handleCancel = () => { history.goBack(); }

    const handleSourceAccount = event => {
        setSourceAccountNumber(event.target.value);
    };

    const handleDescription = event => {
        setDescription(event.target.value);
    };

    const handleAmount = event => {
        setAmount(event.target.value);
    };

    const handleTargetAccount = event => {
        setTargetAccountNumber(event.target.value);
    };

    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <div className="block-section container">
                    <div className="block-section-header">
                        <h3 className="block-section-header-text">New Transfer</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Source Account</label>
                            <select className="form-control" id="source-account" onChange={handleSourceAccount}>
                                {accounts.map((account, index) => {
                                    if (index === 0) {
                                        return <option key={account.id} value={account.accountNumber} selected>
                                            {account.accountNumber + " - " + account.balance + " " + account.currency}
                                        </option>;
                                    } else {
                                        return <option key={account.id} value={account.accountNumber}>
                                            {account.accountNumber + " - " + account.balance + " " + account.currency}
                                        </option>;
                                    }
                                })}
                            </select>

                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input className="form-control" type="text" required onChange={handleDescription} />
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input className="form-control" type="number" required onChange={handleAmount} />
                            {invalidAmount &&
                                <div className="invalid-entry">You have insufficient funds.</div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Target Account</label>
                            <input className="form-control" type="text" required onChange={handleTargetAccount} />
                            {invalidAccount &&
                                <div className="invalid-entry">This account doesn't exist.</div>
                            }
                            {sameAccountt &&
                                <div className="invalid-entry">You can't transfer funds to the same account.</div>
                            }
                        </div>
                        <button type="cancel" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-success">Transfer</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );

}

export default NewTransfer;