import React from 'react';

function TableRow(props) {
    const { book } = props;
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.published}</td>
        </tr>
    );
}

export default TableRow;