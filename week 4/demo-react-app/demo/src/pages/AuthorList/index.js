import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import AuthorInfo from '../AuthorInfo';

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    let { path } = useRouteMatch();
    const headers = ['Name', 'Country', 'Age', 'Books'];

    useEffect(() => {
        let unsubscribe = false;
        let source = axios.CancelToken.source();
        // Actualiza el título del documento usando la API del navegador
        axios.get(`http://localhost:8081/api/v1/author`)
            .then( res => {
                if (!unsubscribe) {
                    setAuthors(res.data);
                }
        }).catch( e=> {
            if (!unsubscribe) {
                if (axios.isCancel(e)) {
                    console.log(`request cancelled:${e.message}`);
                } else {
                    console.log("another error happened:" + e.message);
                }
            }
        });
        return () => { 
            unsubscribe = true;
            source.cancel("Cancelling in cleanup");
        }
    });

    return (
        <div className="container my-3">
            <h1 className="text-center">Authors List</h1>
            <div className="float-right">
                <Link className="btn btn-primary m-1" to={`/addAuthor`}>Add Author</Link>
            </div>
            <Table headers={headers} rows={authors} emptyMessage="There are no authors available."></Table>
            <Switch >
                <Route path={`${path}/:authorId`} component={AuthorInfo} />
            </Switch>
        </div>
    );
}

export default AuthorList;