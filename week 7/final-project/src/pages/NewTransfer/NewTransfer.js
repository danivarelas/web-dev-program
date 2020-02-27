import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';
import Axios from 'axios';
import './NewTransfer.scss';
import { format } from 'date-fns';

const NewTransfer = () => {

    const history = useHistory();

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [sourceAccountNumber, setSourceAccountNumber] = useState("");
    const [targetAccountNumber, setTargetAccountNumber] = useState("");
    const [exchangeRates, setExchangeRates] = useState({});

    const [accounts, setAccounts] = useState([]);
    const [invalidAmount, setInvalidAmount] = useState(false);
    const [insufficientFunds, setInsufficientFunds] = useState(false);
    const [sameAccountt, setSameAccount] = useState(false);
    const [invalidAccount, setInvalidAccount] = useState(false);

    if (!validate(sessionStorage.getItem('JWT'))) {
        history.push("/login");
    }

    useEffect(() => {
        const token = sessionStorage.getItem('JWT');
        const claims = validate(token);
        if (claims) {
            Axios.get(`http://localhost:8081/api/v1/account/byUserId/${claims.id}`, {
                headers: { JWT: token }
            }).then(res => {
                const { data } = res;
                setAccounts(data);
                setSourceAccountNumber(data[0].accountNumber)
            }).catch(e => {

            });
            let dateToday = new Date();
            dateToday = format(dateToday, "dd/MM/yyyy");
            Axios.get(`https://tipodecambio.paginasweb.cr/api/${dateToday}`)
                .then(res => {
                    const { data } = res;
                    setExchangeRates(data);
                });
        }
    }, []);

    const handleSubmit = async (e) => {
        const token = sessionStorage.getItem('JWT');
        e.preventDefault();
        if (sourceAccountNumber !== targetAccountNumber) {
            setSameAccount(false);
            setInsufficientFunds(false);

            const validAmount = checkAmount();
            const validAccount = await checkAccount(targetAccountNumber);

            if (!validAmount || !validAccount) {
                validAmount ? setInvalidAmount(false) : setInvalidAmount(true);
                validAccount ? setInvalidAccount(false) : setInvalidAccount(true);
            } else {
                const sourceAccount = await checkAccount(sourceAccountNumber);
                const targetAccount = await checkAccount(targetAccountNumber);

                const transfer = {
                    transferNumber: Math.floor((Math.random() * 100000000) + 1000000000),
                    transferDescription: description,
                    amount: amount,
                    transferDate: new Date(),
                    sourceAccountId: sourceAccount.id,
                    targetAccountId: targetAccount.id
                }

                const { compra, venta } = exchangeRates;

                Axios.post(`http://localhost:8081/api/v1/transfer?buy=${compra}&sell=${venta}`, transfer, {
                    headers: { JWT: token }
                }).then(res => {
                    history.goBack();
                }).catch(e => {
                    console.log(e);
                    setInsufficientFunds(true);
                });
            }
        } else {
            setInvalidAccount(false);
            setSameAccount(true);
        }
    }

    const checkAmount = () => {
        if (amount > 0) {
            return true;
        } else {
            return false;
        }
    };

    const checkAccount = async (number) => {
        let res = await Axios.get(`http://localhost:8081/api/v1/account/${number}`, {
            headers: { JWT: sessionStorage.getItem('JWT') }
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
                <div className="block-section container-fluid">
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
                            <input className="form-control" type="number" required step="0.01" onChange={handleAmount} />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                The amount has to be specified in the source account currency.
                            </small>
                            {invalidAmount &&
                                <div className="invalid-entry">You have to specify an amount greater than zero.</div>
                            }
                            {insufficientFunds &&
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