package com.example.demo.api.Model;

import java.util.UUID;

public class Book {

    private UUID id;
    private String name;
    private int year;
    private int pages;

    public Book() {
        super();
    }

    public Book(String name) {
        this.name = name;
    }

    public Book(UUID id, String name) {
        this(name);
        this.id = id;
    }

    public Book(UUID id, String name, int year, int pages) {
        this(id,name);
        this.year = year;
        this.pages = pages;
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

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }
}