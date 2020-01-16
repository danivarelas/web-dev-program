package com.example.demo;

import org.springframework.beans.factory.annotation.Required;

public class Book {

    private String name;
    private String author;
    private int isbn;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getIsbn() {
        return isbn;
    }

    @Required
    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    
    
}