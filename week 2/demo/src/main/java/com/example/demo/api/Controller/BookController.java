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
import org.springframework.web.bind.annotation.*;

import io.jsonwebtoken.SignatureException;
import lombok.NonNull;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
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
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        bookService.addBook(book);
    }

    @GetMapping
    public List<Book> getAllBooks() {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        return bookService.selectAllBooks();
    }

    @GetMapping(path = "{id}")
    public Book getBookById(@PathVariable("id") UUID id) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        return bookService.selectBookById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteBook(@PathVariable("id") UUID id) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        bookService.deleteBook(id);
    }

    @PutMapping(path = "{id}")
    public void updateBook(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Book book) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        bookService.updateBook(id, book);
    }
}