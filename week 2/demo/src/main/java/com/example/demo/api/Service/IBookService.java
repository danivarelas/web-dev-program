package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Book;

import org.springframework.stereotype.Service;

@Service
public interface IBookService {

    public int addBook(Book book);

    public List<Book> selectAllBooks();

    public Optional<Book> selectBookById(UUID id);

    public int deleteBook(UUID id);

    public int updateBook(UUID id, Book book);

}