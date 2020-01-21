package com.example.demo.api.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.Model.Author;
import com.example.demo.api.Model.Book;
import com.example.demo.api.Service.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService implements IAuthorService {

    private final AuthorDao authorDao;
    private final BookService bookService;

    public AuthorService(AuthorDao authorDao, BookService bookService) {
        this.authorDao = authorDao;
        this.bookService = bookService;
    }

    public int addAuthor(Author author) {
        if (author == null) {
            return 0;
        } else {
            List<Book> books = author.getBooks();
            if (books != null && !books.isEmpty()) {
                books.forEach((book) -> {
                    Book dbBook = bookService.selectBookByName(book.getName()).orElse(null);
                    if (dbBook != null) {
                        books.set(books.indexOf(book), dbBook);
                    } else {
                        bookService.addBook(book);
                    }
                });
            }
            return authorDao.insertAuthor(author);
        }
    }

    public List<Author> selectAllAuthors() {
        List<Author> authors = authorDao.selectAllAuthors();
        if (authors != null && !authors.isEmpty()) {
            authors.forEach((author) -> {
                author.setBooks(getExistingBooks(author));
            });
        }
        return authors;
    }

    public Optional<Author> selectAuthorById(UUID id) {
        Optional<Author> author = authorDao.selectAuthorById(id);
        if (author.isPresent()) {
            author.get().setBooks(getExistingBooks(author.get()));
        }
        return author;
    }

    public List<Book> getExistingBooks(Author author) {
        List<Book> books = author.getBooks();
        if (books != null && !books.isEmpty()) {
            books.forEach((book) -> {
                Book dbBook = bookService.selectBookByName(book.getName()).orElse(null);
                if (dbBook != null) {
                    books.set(books.indexOf(book), dbBook);
                }
            });
        }
        return books;
    }

    public int deleteAuthor(UUID id) {
        return authorDao.deleteAuthor(id);
    }

    public int updateAuthor(UUID id, Author author) {
        if (author != null) {
            return authorDao.updateAuthor(id, author);
        }
        return 0;
    }
}