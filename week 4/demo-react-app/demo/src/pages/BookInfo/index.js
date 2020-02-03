import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropertyLabel from '../../components/LabelProperty';

function BookInfo(props) {

    let { bookId } = useParams();
    const [book, setBook] = useState([]);

    const handleBack = event => {
        event.preventDefault();
        props.history.goBack();
    }

    useEffect(() => {
        let unsubscribe = false;
        let source = axios.CancelToken.source();
        // Actualiza el título del documento usando la API del navegador
        axios.get(`http://localhost:8081/api/v1/book/${bookId}`)
            .then( res => {
                if (!unsubscribe) {
                    setBook(res.data);
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
    }, [bookId]);

    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2 className="text-center">{book.name}</h2>
                <PropertyLabel label="Year:" value={book.year}></PropertyLabel>
                <PropertyLabel label="Pages:" value={book.pages}></PropertyLabel>
                <div className="text-center my-3">
                    <button type="cancel" className="btn btn-danger" onClick={handleBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default BookInfo;