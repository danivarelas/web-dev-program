package com.example.demo.api.Controller;

import java.util.List;
import java.util.UUID;
import java.util.logging.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.example.demo.api.Model.Book;
import com.example.demo.api.Service.BookService;
import com.example.demo.api.Util.JWTGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.SignatureException;
import lombok.NonNull;

@RequestMapping("api/v1/book")
@RestController
public class BookController {

    private final BookService bookService;
    private HttpServletRequest request;

    private final static Logger LOGGER = Logger.getLogger(AuthorController.class.getName());

    @Autowired
    public BookController(BookService bookService, HttpServletRequest request) {
        this.bookService = bookService;
        this.request = request;
    }

    @PostMapping
    public void addBook(@RequestBody Book book) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            bookService.addBook(book);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "ERROR: " + e.getLocalizedMessage());
        }
    }

    @GetMapping
    public List<Book> getAllBooks() {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            return bookService.selectAllBooks();
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "ERROR: " + e.getLocalizedMessage());
        }
        return null;
    }

    @GetMapping(path = "{id}")
    public Book getBookById(@PathVariable("id") UUID id) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            return bookService.selectBookById(id).orElse(null);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "ERROR: " + e.getLocalizedMessage());
        }
        return null;
    }

    @DeleteMapping(path = "{id}")
    public void deleteBook(@PathVariable("id") UUID id) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            bookService.deleteBook(id);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "ERROR: " + e.getLocalizedMessage());
        }
    }

    @PutMapping(path = "{id}")
    public void updateBook(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Book book) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            bookService.updateBook(id, book);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "ERROR: " + e.getLocalizedMessage());
        }
    }
}