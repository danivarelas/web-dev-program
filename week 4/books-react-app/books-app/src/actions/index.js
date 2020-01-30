
export const selectBooks = (books, searchText) => ({
    type: 'SELECT_BOOKS',
    searchText: "",
    books
})