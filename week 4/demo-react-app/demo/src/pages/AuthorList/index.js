import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    const headers = ['Name', 'Books', 'Delete'];

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
    }, [authors]);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Authors List</h1>
            <div className="float-right">
                <Link className="btn btn-primary my-2" to={`/addAuthor`}>Add Author</Link>
            </div>
            <Table headers={headers} rows={authors} authors={true} emptyMessage="There are no authors available."></Table>
        </div>
    );
}

export default AuthorList;