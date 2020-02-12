package com.example.demo.api.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DTO.BookDTO;
import com.example.demo.api.Model.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookDao {

    int insertBook(long id, Book book);

    List<Book> selectAllBooks();

    Optional<Book> selectBookById(long id);

    Optional<Book> selectBookByName(String name);

    int deleteBook(long id);

    int updateBook(long id, Book book);
}