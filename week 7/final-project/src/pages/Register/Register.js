import React, { useState } from 'react';
import Axios from 'axios';

const Register = (props) => {

    const { history } = props;

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        if (password === confirmPassword) {
            const user = {
                name,
                lastname,
                email,
                username,
                password
            }
            Axios.post(`http://localhost:8081/api/v1/user`, user)
                .then(res => {
                    history.goBack();
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
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    return (
        <div className="container">
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
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default Register;