import React from 'react';
import Table from '../../components/Table';
import SearchBook from '../SearchBook/index.js';

function BooksList(props) {
    const {headers, data} = props;
    return (
        <div className="container p-2">
            <div className="row">
                <h1 className="mx-auto m-1">List of Books</h1>
            </div>
            <SearchBook />
            <div className="row">
                <Table headers={headers} rows={data}></Table>
            </div>
            
        </div>
    );
}

export default BooksList;