package com.example.demo;

public class Bookstore {

    public Book book;
    private Magazine mag;

	public Bookstore(Book book1) {
        this.book = book;
    }
    
    public Magazine getMagazine() {
        return mag;
    }

    public void setMagazine(Magazine mag) {
        this.mag = mag;
    }
}