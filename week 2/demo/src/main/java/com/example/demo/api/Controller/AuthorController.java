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
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            authorService.addAuthor(author);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "Error: " + e.getLocalizedMessage());
        }
    }

    @GetMapping
    public List<Author> getAllAuthors() {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            return authorService.selectAllAuthors();
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "Error: " + e.getLocalizedMessage());
        }
        return null;
    }

    // @RequestParam

    @GetMapping(path = "{id}")
    public Author getAuthorById(@PathVariable("id") UUID id) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            return authorService.selectAuthorById(id).orElse(null);
        } catch (SignatureException e) {
            LOGGER.log(Level.INFO, "Error: " + e.getLocalizedMessage());
        }
        return null;
    }

    @DeleteMapping(path = "{id}")
    public void deleteAuthor(@PathVariable("id") UUID id) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            authorService.deleteAuthor(id);
        } catch (ObjectNotFoundException e) {
            LOGGER.log(Level.INFO, "Error: " + e.getLocalizedMessage());
        }
    }

    @PutMapping(path = "{id}")
    public void updateAuthor(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Author author) {
        try {
            JWTGenerator.validateToken(request.getHeader("authorization"));
            authorService.updateAuthor(id, author);
        } catch (ObjectNotFoundException e) {
            LOGGER.log(Level.INFO, "Error: " + e.getLocalizedMessage());
        }
    }
    
}