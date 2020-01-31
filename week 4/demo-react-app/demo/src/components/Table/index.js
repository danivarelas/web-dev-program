import React from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

function Table(props) {
    const {headers, rows, emptyMessage} = props;
    if (rows && rows.length) {
        return (
            <table className="table table-hover m-1">
                <thead className="thead-dark">
                    <TableHeader header={headers}></TableHeader>
                </thead>
                <tbody>
                    {rows.map((row) => {
                        return (
                            <TableRow author={row}></TableRow>
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