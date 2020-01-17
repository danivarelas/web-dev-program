package com.example.demo.api.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Book;

public interface BookDao {

    int insertBook(UUID id, Book book);

    default int insertBook(Book book) {
        UUID id = UUID.randomUUID();
        return insertBook(id, book);
    }

    List<Book> selectAllBooks();

    Optional<Book> selectBookById(UUID id);

    int deleteBook(UUID id);

    int updateBook(UUID id, Book book);
}