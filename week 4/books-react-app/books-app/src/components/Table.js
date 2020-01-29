import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table(props) {
    const {headers, rows} = props;
    return (
        <table className="table table-striped m-1">
            <thead className="thead-dark">
                <TableHeader header={headers}></TableHeader>
            </thead>
            <tbody>
                {rows.map((row) => {
                    return (
                        <TableRow book={row}></TableRow>
                    );}
                )}
            </tbody>
        </table>
    );
}

export default Table;