package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Book;

import org.springframework.stereotype.Repository;

@Repository
public class BookDataAccessService implements BookDao {

    private static List<Book> booksRepository = new ArrayList<>();

    @Override
    public int insertBook(UUID id, Book book) {
        booksRepository.add(new Book(id, book.getName()));
        return 1;
    }

    @Override
    public List<Book> selectAllBooks() {
        return booksRepository;
    }

    @Override
    public Optional<Book> selectBookById(UUID id) {
        return booksRepository.stream().filter(book -> book.getId().equals(id)).findFirst();
    }

    @Override
    public Optional<Book> selectBookByName(String name) {
        return booksRepository.stream().filter(book -> book.getName().equals(name)).findFirst();
    }

    @Override
    public int deleteBook(UUID id) {
        Optional<Book> book = selectBookById(id);
        if (book.equals(null)) {
            return 0;
        }
        booksRepository.remove(book.get());
        return 1;
    }

    @Override
    public int updateBook(UUID id, Book book) {
        return selectBookById(id).map(p -> {
            int indexOfBook = booksRepository.indexOf(p);
            if (indexOfBook >= 0) {
                booksRepository.set(indexOfBook, book);
                return 1;
            }
            return 0;
        }).orElse(0);
    }

}