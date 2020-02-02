import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import TableBooks from '../../components/TableBooks';

function AuthorInfo() {

    let { authorId } = useParams();
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        let unsubscribe = false;
        let source = axios.CancelToken.source();
        // Actualiza el título del documento usando la API del navegador
        axios.get(`http://localhost:8081/api/v1/author/${authorId}`)
            .then( res => {
                if (!unsubscribe) {
                    setAuthor(res.data);
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

    const headers = ['Name']
    return (
        <div className="jumbotron">
            <h2 className="mx-auto">{author.name}</h2>
            <div className="row justify-content-start">
                <div className="col-1">
                    <label>Age:</label>
                </div>
                <div className="col-2">
                    <label>{author.age}</label>
                </div>
            </div>
            <div className="row justify-content-start">
                <div className="col-1">
                    <label>Country:</label>
                </div>
                <div className="col-2">
                    <label>{author.country}</label>
                </div>
            </div>
            <div className="float-right">
                <Link className="btn btn-primary m-1" to={`/addBook/${authorId}`}>Add Book</Link>
            </div>
            <TableBooks headers={headers} author={author} emptyMessage="There are no books available."></TableBooks>
        </div>
    );
}

export default AuthorInfo;