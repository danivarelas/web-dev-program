package com.example.demo.api.Model;

import java.util.UUID;

public class Book {

    private UUID id;
    private String name;

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

}