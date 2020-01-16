package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;

public class Reader {

    public BookRepository bookRepository;
    private Magazine mag;

    public Reader(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Magazine getMagazine() {
        return mag;
    }

    @Autowired
    public void setMagazine(Magazine mag) {
        this.mag = mag;
    }

    public void readBook() {
        System.out.println(bookRepository.toString());
    }

    public void readMagazine() {
        String s = "magazine content";
        mag.read(s);
    }
}