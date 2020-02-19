import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const Register = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const user = {
                name,
                lastName,
                email,
                username,
                password
            }
            console.log(user)
            Axios.post(`http://localhost:8081/api/v1/user`, user)
                .then(res => {
                    history.push("/");
                }).catch(e => {
                    console.log(e);
                    if (Axios.isCancel(e)) {
                        alert(`request cancelled:${e.message}`);
                    } else {
                        alert("another error happened:" + e.message);
                    }
                });
        }

    }

    const handleName = event => { setName(event.target.value); }

    const handleLastname = event => { setLastName(event.target.value); }

    const handleUsername = event => { setUsername(event.target.value); }

    const handleEmail = event => { setEmail(event.target.value); }

    const handleCode = event => { setCountryCode(event.target.value); }

    const handlePhone = event => { setPhoneNumber(event.target.value); }

    const handlePassword = event => {
        const hash = Base64.stringify(sha256(event.target.value));
        setPassword(hash);
    }

    const handleConfirmPassword = event => {
        const hash = Base64.stringify(sha256(event.target.value));
        setConfirmPassword(hash);
    }

    const handleCancel = () => { history.push("/login"); }

    return (
        <div className="container">
            <h1>Create a PowerBank account</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <label>Name</label>
                        <input className="form-control" type="text" required onChange={handleName} placeholder="John" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Last Name</label>
                        <input className="form-control" type="text" required onChange={handleLastname} placeholder="Doe" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text" required onChange={handleUsername} placeholder="jdoe" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" required onChange={handleEmail} placeholder="jdoe@email.com" />
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-3">
                        <label>Country Code</label>
                        <input type="text" class="form-control" required onChange={handleCode} placeholder="+506" />
                    </div>
                    <div class="form-group col-sm-9">
                        <label>Phone Number</label>
                        <input type="text" class="form-control" required onChange={handlePhone} placeholder="88888888" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" required onChange={handlePassword}></input>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Your password must be minimum 8 characters long and contain at least one uppercase letter,
                        one lowercase letter and one number. It must not contain spaces or special characters.
                    </small>
                </div>
                <div className="form-group">
                    <label> Confirm Password</label>
                    <input className="form-control" type="password" required onChange={handleConfirmPassword}></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Register</button>
                    <button className="btn btn-danger" type="cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
export default Register;