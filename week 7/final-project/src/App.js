import React, { useEffect, useState } from 'react';
import './App.scss';
import Login from './pages/Login/Login';
import { withCookies, useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import validate from './utils/JWTParser';

function App() {
    
    const [cookies] = useCookies(['JWT']);

    const [redirect, setRedirect] = useState("");

    useEffect(() => {
        if (validate(cookies.JWT)) {
            setRedirect("/home");
        } else {
            setRedirect("/login");
        }
    }, [redirect, cookies]);

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Redirect from="/" to={redirect} />
            </Switch>
        </Router>
    );
}

export default withCookies(App);
