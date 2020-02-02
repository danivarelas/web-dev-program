import React from 'react';
import TableHeader from '../TableHeader';

function TableBooks(props) {
    const {headers, author, emptyMessage} = props;
    if (author.books && author.books.length) {
        return (
            <table className="table table-hover m-1">
                <thead className="thead-dark">
                    <TableHeader header={headers}></TableHeader>
                </thead>
                <tbody>
                    {author.books.map((book) => {
                        return (
                            <tr>
                                <td>{book.name}</td>
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