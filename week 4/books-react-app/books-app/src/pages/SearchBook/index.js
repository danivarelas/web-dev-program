import React, {useRef} from 'react';
import { connect } from 'react-redux';

function SearchBook(props) {
    const { searchBook } = props;
    const word = useRef(null);
    return(
        <div className="row">
            <input className="form-control col-3 m-1" name="search" type="text"/>
            <button className="btn btn-primary col-1 m-1" onClick={() => {searchBook(word.current.value)}}>Search</button>
        </div>
    );
}

export default SearchBook;