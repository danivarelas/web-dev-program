import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import TableBooks from '../../components/TableBooks';
import PropertyLabel from '../../components/LabelProperty';

function AuthorInfo(props) {

    let { authorId } = useParams();
    const [author, setAuthor] = useState([]);

    const handleBack = event => {
        event.preventDefault();
        props.history.goBack();
    }

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
    }, [authorId]);

    const headers = ['Name', 'Remove'];
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2 className="text-center">{author.name}</h2>
                <PropertyLabel label="Country:" value={author.country}></PropertyLabel>
                <PropertyLabel label="Age:" value={author.age}></PropertyLabel>
                <div className="float-right">
                    <Link className="btn btn-primary my-2" to={`/addBook/${authorId}`}>Add Book</Link>
                </div>
                <TableBooks headers={headers} author={author} emptyMessage="There are no books available."></TableBooks>
                <div className="text-center my-3">
                    <button type="cancel" className="btn btn-danger" onClick={handleBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default AuthorInfo;