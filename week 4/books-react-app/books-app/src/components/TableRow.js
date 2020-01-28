import React from 'react';

function TableRow() {
    const { id, name, author, year } = this.props.book;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{author}</td>
            <td>{year}</td>
        </tr>
    );
}

export default TableRow;