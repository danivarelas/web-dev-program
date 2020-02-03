import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FormSubmitButtons from '../../components/FormSubmitButtons';

function AddBook(props) {

    let { authorId } = useParams();
    const [author, setAuthor] = useState("");
    const [bookName, setBookName] = useState("");
    const [bookYear, setBookYear] = useState("");
    const [bookPages, setBookPages] = useState("");

    const handleNameChange = event => {
        setBookName(event.target.value);
    }

    const handleYearChange = event => {
        setBookYear(event.target.value);
    }

    const handlePagesChange = event => {
        setBookPages(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const { history } = props;
        const book = {
            name: bookName,
            year: bookYear,
            pages: bookPages
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
    }, [authorId]);

    return (
    <div className="container mt-5">
        <h1 className="text-center my-2">Add Book</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input type="text" name="name" className="form-control" onChange={handleNameChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="number" name="year" min="0" max="2020" className="form-control" onChange={handleYearChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="pages">Pages</label>
                <input type="number" name="pages" min="1" max="10000" className="form-control" onChange={handlePagesChange} required/>
            </div>
            <FormSubmitButtons history={props.history}></FormSubmitButtons>
        </form>
    </div>
    )
}

export default AddBook;