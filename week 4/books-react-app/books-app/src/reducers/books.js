const initialState = { 
    books: [
        {
            id: '1',
            name: 'Harry Potter',
            author: 'J.K. Rowling',
            year: 1997
        },
        {
            id: '2',
            name: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            year: 1954
        },
        {
            id: '3',
            name: 'The Diary of a Young Girl',
            author: 'Anne Frank',
            year: 1947
        },
        {
            id: '4',
            name: 'The German Girl',
            author: 'Armando Lucas Correa',
            year: 2016
        }
    ]
};

const books = (state = initialState, action) => {
    switch(action.type){
        // crear un objeto nuevo desde cero (inmutable)
        case 'SEARCH_TEXT':
            console.log(action.searchText);
            return {
                ...state,
                books: state.books.filter((book) => {
                   return book.name.toLowerCase().includes(action.searchText);
                })
            };
        default:
            return state;
    }
}

export default books;