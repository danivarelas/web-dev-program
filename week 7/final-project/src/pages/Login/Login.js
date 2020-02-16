import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(username);
        console.log(password);
        const user = {
            username: username,
            password: password
        }
        Axios.post(`http://localhost:8081/api/v1/login`, user)
        .then(res => {
            alert(res.data);
            //history.goBack();
        }).catch( e=> {
            console.log(e);
            if (Axios.isCancel(e)) {
                alert(`request cancelled:${e.message}`);
            } else {
                alert("another error happened:" + e.message);
            }
        });
    }

    const handleUsername = event => {
        setUsername(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text" required onChange={handleUsername}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control" type="password" required onChange={handlePassword}></input>
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;