const books = (state = [], action) => {
    switch(action.type){
        // crear un objeto nuevo desde cero (inmutable)
        case "SEARCH_TEXT":
            // return Object.assign({}, state, {
            //     searchText: action.searchText
            // });
        default:
            return state;
    }
}

export default books;