import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AddBook(props) {

    let { authorId } = useParams();
    const [author, setAuthor] = useState("");
    const [bookName, setBookName] = useState("");

    const handleNameChange = event => {
        setBookName(event.target.value);
    }

    const handleBack = event => {
        event.preventDefault();
        props.history.goBack();
    }

    const handleSubmit = event => {
        event.preventDefault();
        const { history } = props;
        const book = {
            name: bookName
        };
        let author2 = author;
        if (author2.books) {
            author2.books.push(book);
        } else {
            author2.books = [book];
        }
        setAuthor(author);
        console.log(author);
        axios.put(`http://localhost:8081/api/v1/author/${authorId}`, author)
        .then(res => {
            console.log(res);
            history.goBack();
        });
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
    });

    return (
    <div className="container">
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input type="text" name="name" className="form-control" onChange={handleNameChange} required/>
            </div>
            <div className="float-right">
                <button type="submit" className="btn btn-success m-1">Add</button>
                <button type="cancel" className="btn btn-danger m-1" onChange={handleBack}>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default AddBook;