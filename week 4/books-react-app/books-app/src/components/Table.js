import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table(props) {
    const {headers, rows} = props;
    return (
        <table className="table">
            <thead>
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