import React, { useState } from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const Login = () => {

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['JWT']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        Axios.post(`http://localhost:8081/api/v1/login`, user, {
            headers: {
                JWT: cookies.JWT,
            }
        }).then(res => {
            setCookie('JWT', res.data, { path: '/' });
            history.push("/");
        }).catch(e => {
            console.log(e);
            if (Axios.isCancel(e)) {
                alert(`request cancelled:${e.message}`);
            } else if (e.response.status === 400){
                alert(`bad request:${e.message}`);
            } else {
                alert("another error happened:" + e.message);
            }
        });
    }

    const handleUsername = event => {
        setUsername(event.target.value);
    }

    const handlePassword = event => {
        const hash = Base64.stringify(sha256(event.target.value));
        setPassword(hash);
    }

    return (
        <div className="container">
            <h1>Login to PowerBank</h1>
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
                    <button className="btn btn-success" type="submit" >Login</button>
                </div>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
        </div>
    );
}

export default Login;