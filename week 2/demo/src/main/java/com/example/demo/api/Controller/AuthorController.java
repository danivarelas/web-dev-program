package com.example.demo.api.Controller;

import java.util.logging.*;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.example.demo.api.Exception.ObjectNotFoundException;
import com.example.demo.api.Model.Author;
import com.example.demo.api.Service.AuthorService;
import com.example.demo.api.Util.JWTGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.jsonwebtoken.SignatureException;
import lombok.NonNull;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("api/v1/author")
@RestController
public class AuthorController {

    private final AuthorService authorService;
    private HttpServletRequest request;

    private final static Logger LOGGER = Logger.getLogger(AuthorController.class.getName());

    @Autowired
    public AuthorController(AuthorService authorService, HttpServletRequest request) {
        this.authorService = authorService;
        this.request = request;
    }

    @PostMapping
    public void addAuthor(@RequestBody Author author) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        authorService.addAuthor(author);
    }

    @GetMapping
    public List<Author> getAllAuthors() {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        return authorService.selectAllAuthors();
    }

    // @RequestParam

    @GetMapping(path = "{id}")
    public Author getAuthorById(@PathVariable("id") UUID id) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        return authorService.selectAuthorById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteAuthor(@PathVariable("id") UUID id) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        authorService.deleteAuthor(id);
    }

    @PutMapping(path = "{id}")
    public void updateAuthor(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Author author) {
        //JWTGenerator.validateToken(request.getHeader("authorization"));
        authorService.updateAuthor(id, author);
    }
    
}