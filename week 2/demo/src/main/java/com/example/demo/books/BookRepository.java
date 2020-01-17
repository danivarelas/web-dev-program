package com.example.demo.books;

import java.util.ArrayList;

public class BookRepository {

    public ArrayList<Book> Books;

    public BookRepository() {
        Books = new ArrayList<>();
    }

    public void addBook(Book book) {
        Books.add(book);
    }

    public void removeBook(Book book) {
        Books.remove(book);
    }

    public void updateBook(Book book) {
        int i = 0;
        while (i < Books.size() && Books.get(i).getIsbn() == book.getIsbn()) {
            i++;
        }
        if (Books.get(i).getIsbn() == book.getIsbn()) {
            Books.set(i, book);
        }
    }

    public Book getBook(int isbn) {
        int i = 0;
        while (i < Books.size() && Books.get(i).getIsbn() == isbn) {
            i++;
        }
        if (Books.get(i).getIsbn() == isbn) {
            return Books.get(i);
        } else {
            return null;
        }
    }

}