import React from 'react';
import TableHeader from '../TableHeader';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function TableBooks(props) {

    const {headers, author, emptyMessage} = props;

    const handleRemove = (bookId) => {

        console.log(bookId);
        const bookRemove = {
            id: bookId
        };
        
        let newBooks = author.books.filter(book => {
            //console.log(book.id + ' != ' + bookRemove.id)
            return book.id !== bookRemove.id;
        });
        author.books = newBooks;
        console.log(newBooks);
        Axios.put(`http://localhost:8081/api/v1/author/${author.id}`, author)
        .then(res => {
            console.log(res);
        });
    }

    if (author.books && author.books.length) {
        return (
            <table className="table table-hover table-striped m-1">
                <thead className="thead-dark text-center">
                    <TableHeader header={headers}></TableHeader>
                </thead>
                <tbody className="text-center">
                    {author.books.map((book) => {
                        return (
                            <tr>
                                <td className="align-middle"><Link to={`/book/${book.id}`}>{book.name}</Link></td>
                                <td><button className="btn btn-secondary" onClick={() => handleRemove(book.id)}><i className="fas fa-trash"></i></button></td>
                            </tr>
                        );}
                    )}
                </tbody>
            </table>
        );
    } else {
        return (
        <p>{emptyMessage}</p>
        );
    }
}

export default TableBooks;