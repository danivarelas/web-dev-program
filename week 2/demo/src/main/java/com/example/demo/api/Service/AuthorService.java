package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.Model.Author;
import com.example.demo.api.Model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService implements IAuthorService {

    private final AuthorDao authorDao;
    private BookService bookService;

    @Autowired
    public AuthorService(AuthorDao authorDao, BookService bookService) {
        this.authorDao = authorDao;
        this.bookService = bookService;
    }

    public int addAuthor(Author author) {
        List<Book> books = author.getBooks();
        if (books.equals(null) || books.isEmpty()) {
            books.forEach((book) -> {
                Book dbBook = bookService.selectBookById(book.getId()).orElse(null);
                if (dbBook != null) {

                }
            });
        }
        return authorDao.insertAuthor(author);
    }

    public List<Author> selectAllAuthors() {
        return authorDao.selectAllAuthors();
    }

    public Optional<Author> selectAuthorById(UUID id) {
        return authorDao.selectAuthorById(id);
    }

    public int deleteAuthor(UUID id) {
        return authorDao.deleteAuthor(id);
    }

    public int updateAuthor(UUID id, Author author) {
        return authorDao.updateAuthor(id, author);
    }
}