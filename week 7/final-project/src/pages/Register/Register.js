import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const Register = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const user = {
                name,
                lastname,
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

    const handleName = event => {
        setName(event.target.value);
    }

    const handleLastname = event => {
        setLastname(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleUsername = event => {
        setUsername(event.target.value);
    }

    const handlePassword = event => {
        const hash = Base64.stringify(sha256(event.target.value));
        setPassword(hash);
    }

    const handleConfirmPassword = event => {
        const hash = Base64.stringify(sha256(event.target.value));
        setConfirmPassword(hash);
    }

    return (
        <div className="container">
            <h1>Create a PowerBank account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" required onChange={handleName}></input>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" required onChange={handleLastname}></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" required onChange={handleEmail}></input>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text" required onChange={handleUsername}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control" type="password" required onChange={handlePassword}></input>
                </div>
                <div>
                    <label> Confirm Password</label>
                    <input className="form-control" type="password" required onChange={handleConfirmPassword}></input>
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
export default Register;