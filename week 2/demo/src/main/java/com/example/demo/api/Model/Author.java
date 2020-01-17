package com.example.demo.api.Model;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.NotBlank;

public class Author {

    private UUID id;
    @NotBlank
    private String name;
    private LocalDate birthDate;
    private List<Book> books;

    public Author() {
        super();
    }

    public Author(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public Author(UUID id, String name, LocalDate birthdDate, List<Book> books) {
        this(id, name);
        this.birthDate = birthdDate;
        this.books = books;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

}