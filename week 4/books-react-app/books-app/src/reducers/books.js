const books = (state = [], actions) => {
    switch(actions.type){
        // crear un objeto nuevo desde cero (inmutable)
        case "SELECT_BOOK":
            return Object.assign({}, state, {
                searchText: actions.searchText
            });
        default:
            return state;
    }
}

export default books;