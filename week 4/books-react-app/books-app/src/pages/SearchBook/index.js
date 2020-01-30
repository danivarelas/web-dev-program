import React from 'react';
import { selectBooks } from '../../actions/index.js'
import { connect } from 'react-redux';

function SearchBook() {
    return(
        <div className="row">
            <input className="form-control col-3 m-1" name="search" type="text"/>
            <button className="btn btn-primary col-1 m-1" onClick={() => {selectBooks('har')}}>Search</button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: selectBooks(state.books, state.searchText)
})

const mapDispatchToProps = dispatch => ({
    selectBooks: searchText => dispatch(selectBooks(searchText))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);