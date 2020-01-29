import React from 'react';

function SearchBook() {
    return(
        <div className="row">
            <input className="form-control col-3 m-1" name="search" type="text"/>
            <button className="btn btn-primary col-1 m-1">Search</button>
        </div>
    );
}

export default SearchBook;