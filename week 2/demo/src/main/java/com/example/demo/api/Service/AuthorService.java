package com.example.demo.api.Service;

import java.util.*;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.DTO.AuthorDTO;
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

    public Author addAuthor(Author author) {
        if (author == null) {
            return null;
        } else {
            AuthorDTO authorDTO = authorDao.save(new AuthorDTO(author.getName(), author.getCountry(), author.getAge()));
            //author.setBooks(saveNewBooks(author));
            return new Author(authorDTO.getId(),authorDTO.getName(),authorDTO.getCountry(),authorDTO.getAge());
        }
    }

    public List<Author> selectAllAuthors() {
        List<AuthorDTO> authorsDTO = authorDao.findAll();
        List<Author> authors = new ArrayList<>();
//        if (authors != null && !authors.isEmpty()) {
//            authors.forEach((author) -> {
//                author.setBooks(getExistingBooks(author));
//            });
//        }
        authorsDTO.forEach((authorDTO) -> {
            authors.add(new Author(authorDTO.getId(),authorDTO.getName(),authorDTO.getCountry(),authorDTO.getAge()));
        });
        return authors;
    }

//    public Optional<Author> selectAuthorById(Long id) {
//        Optional<AuthorDTO> author = authorDao.selectAuthorById(id);
//        if (author.isPresent()) {
//            author.get().setBooks(getExistingBooks(author.get()));
//        }
//        Optional<Author> author = new Optional<Author>().get();
//        return author;
//    }

//    public int deleteAuthor(Long id) {
//        return authorDao.deleteAuthor(id);
//    }
//
//    public int updateAuthor(Long id, AuthorDTO authorDTO) {
//        if (authorDTO == null) {
//            return 0;
//        } else {
//            //author.setBooks(saveNewBooks(author));
//            return authorDao.updateAuthor(id, authorDTO);
//        }
//    }

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

    public List<Book> saveNewBooks(Author author) {
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
        return books;
    }

}