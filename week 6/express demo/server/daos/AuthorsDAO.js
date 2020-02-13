function AuthorsDAO () {

    const authorsList = [];

    this.save = (authorDTO) => {
        authorsList.push(authorDTO);
        console.log(authorsList)
    }

    this.selectAll = () => {
        console.log(authorsList)
        return authorsList;
    }

}

Object.freeze(AuthorsDAO);
export default AuthorsDAO;