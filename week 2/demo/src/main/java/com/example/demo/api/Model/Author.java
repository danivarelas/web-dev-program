package com.example.demo.api.Model;

import java.util.List;

import javax.validation.constraints.NotBlank;

public class Author {

    private Long id;
    @NotBlank
    private String name;
    private String country;
    private int age;
    private List<Book> books;

    public Author() {
        super();
    }

    public Author(String name) {
        this.name = name;
    }

    public Author(Long id, String name) {
        this(name);
        this.id = id;
    }

    public Author(Long id, String name, String country, int age) {
        this(id, name);
        this.country = country;
        this.age = age;
        //this.books = books;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

}