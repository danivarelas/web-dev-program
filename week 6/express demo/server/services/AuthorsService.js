import AuthorsDAO from '../daos/AuthorsDAO';
import AuthorDTO from '../dtos/AuthorDTO';

function AuthorsService () {

    const authorsDAO = new AuthorsDAO();

    this.save = (author) => {
        const uuidv1 = require('uuid/v1');
        var authorDTO = new AuthorDTO(uuidv1(), author.name, author.country, author.age, author.books);
        authorsDAO.save(authorDTO);
    }

    this.selectAll = () => {
        return authorsDAO.selectAll;
    }

}

export default AuthorsService;
