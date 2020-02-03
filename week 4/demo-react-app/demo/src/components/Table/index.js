import React from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

function Table(props) {

    const {headers, rows, authors, emptyMessage} = props;
    if (rows && rows.length) {
        return (
            <table className="table table-hover table-striped my-3">
                <thead className="thead-dark text-center">
                    <TableHeader header={headers}></TableHeader>
                </thead>
                <tbody className="text-center">
                    {rows.map((row) => {
                        return (
                            <TableRow row={row} authors={authors}></TableRow>
                        );}
                    )}
                </tbody>
            </table>
        );
    } else {
        return (
        <p>{emptyMessage}</p>
        )
    }
}

export default Table;