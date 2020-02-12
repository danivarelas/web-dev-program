package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DAO.BookDao;
import com.example.demo.api.Model.Book;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {

    private BookDao bookDao;

    public BookService(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    @Override
    public int addBook(Book book) {
        return 1;//bookDao.insertBook(book);
    }

    @Override
    public List<Book> selectAllBooks() {
        return bookDao.selectAllBooks();
    }

    @Override
    public Optional<Book> selectBookById(long id) {
        return bookDao.selectBookById(id);
    }

    @Override
    public Optional<Book> selectBookByName(String name) {
        return bookDao.selectBookByName(name);
    }

    @Override
    public int deleteBook(long id) {
        return bookDao.deleteBook(id);
    }

    @Override
    public int updateBook(long id, Book book) {
        return bookDao.updateBook(id, book);
    }

}