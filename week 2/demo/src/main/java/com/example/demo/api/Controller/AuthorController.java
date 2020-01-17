package com.example.demo.api.Controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import com.example.demo.api.Exception.ObjectNotFoundException;
import com.example.demo.api.Model.Author;
import com.example.demo.api.Service.AuthorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NonNull;

@RequestMapping("api/v1/author")
@RestController
public class AuthorController {

    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @PostMapping
    public void addAuthor(@RequestBody Author author) {
        authorService.addAuthor(author);
    }

    @GetMapping
    public List<Author> getAllAuthors() {
        return authorService.selectAllAuthors();
    }

    @GetMapping(path = "{id}")
    public Author getAuthorById(@PathVariable("id") UUID id) {
        return authorService.selectAuthorById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteAuthor(@PathVariable("id") UUID id) {
        try {
            authorService.deleteAuthor(id);
        } catch (ObjectNotFoundException e) {

        }
    }

    @PutMapping(path = "{id}")
    public void updateAuthor(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Author author) {
        authorService.updateAuthor(id, author);
    }
}