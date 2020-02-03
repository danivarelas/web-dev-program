import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';

function BookList() {
    const [books, setBooks] = useState([]);
    const headers = ['Name'];

    useEffect(() => {
        let unsubscribe = false;
        let source = axios.CancelToken.source();
        // Actualiza el título del documento usando la API del navegador
        axios.get(`http://localhost:8081/api/v1/book`)
            .then( res => {
                if (!unsubscribe) {
                    setBooks(res.data);
                }
        }).catch( e => {
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
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Books List</h1>
            <Table headers={headers} rows={books} authors={false} emptyMessage="There are no books registered."></Table>
        </div>
    );
}

export default BookList;