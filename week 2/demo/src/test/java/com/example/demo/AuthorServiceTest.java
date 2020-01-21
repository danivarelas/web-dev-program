package com.example.demo;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.Model.Author;
import com.example.demo.api.Model.Book;
import com.example.demo.api.Service.AuthorService;
import com.example.demo.api.Service.BookService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class AuthorServiceTest {

    @Mock
    private AuthorDao authorDao;

    @Mock
    private BookService bookService;

    @Autowired
    @InjectMocks
    AuthorService authorService;

    @Test
    public void test_saveNullAuthorShouldReturnZero() {
        int result = authorService.addAuthor(null);
        Assert.assertEquals(0, result);
    }

    @Test
    public void test_saveNotNullAuthorShouldReturnOne() {
        Mockito.when(authorDao.insertAuthor(Mockito.any(Author.class))).thenReturn(1);
        Author author = new Author(UUID.randomUUID(), "user");
        int result = authorService.addAuthor(author);
        Assert.assertEquals(1, result);

    }

    @Test
    public void test_saveAuthorWithExistingBookShouldReturnOne() {
        List<Book> books = new ArrayList<>();
        Book book = new Book("book");
        Optional<Book> opBook = Optional.of(book);
        Mockito.when(bookService.selectBookByName(Mockito.anyString())).thenReturn(opBook);
        Mockito.when(authorDao.insertAuthor(Mockito.any(Author.class))).thenReturn(1);
        Author author = new Author(UUID.randomUUID(), "user");
        books.add(book);
        author.setBooks(books);
        int result = authorService.addAuthor(author);
        Assert.assertEquals(1, result);
    }

    @Test
    public void test_saveAuthorWithNonExistingBookShouldReturnOne() {
        List<Book> books = new ArrayList<>();
        Book book = null;
        Mockito.when(bookService.selectBookByName(Mockito.anyString())).thenReturn(Optional.ofNullable(book));
        Mockito.when(bookService.addBook(Mockito.any(Book.class))).thenReturn(1);
        Mockito.when(authorDao.insertAuthor(Mockito.any(Author.class))).thenReturn(1);
        Author author = new Author(UUID.randomUUID(), "user");
        book =new Book("book");
        books.add(book);
        author.setBooks(books);
        int result = authorService.addAuthor(author);
        Assert.assertEquals(1, result);
    }

    @Test
    public void test_selectAllAuthorsFromNullListShouldReturnNull() {
        List<Author> authors = null;
        Mockito.when(authorDao.selectAllAuthors()).thenReturn(authors);
        authors = authorService.selectAllAuthors();
        Assert.assertNull(authors);
    }

    @Test
    public void test_selectAllAuthorsFromEmptyListShouldReturnEmptyList() {
        List<Author> authors = new ArrayList<>();
        Mockito.when(authorDao.selectAllAuthors()).thenReturn(authors);
        authors = authorService.selectAllAuthors();
        Assert.assertNotNull(authors);
        Assert.assertEquals(true, authors.isEmpty());
    }

    @Test
    public void test_selectAllAuthorsFromNonEmptyListWithNullBooksListShouldReturnNonEmptyList() {
        List<Author> authors = new ArrayList<>();
        Author author = new Author("author");
        List<Book> books = null;
        author.setBooks(books);
        authors.add(author);
        Mockito.when(authorDao.selectAllAuthors()).thenReturn(authors);
        authors = authorService.selectAllAuthors();
        Assert.assertNotNull(authors);
        Assert.assertEquals(false, authors.isEmpty());
    }

    @Test
    public void test_selectAllAuthorsFromNonEmptyListWithEmptyBooksListShouldReturnNonEmptyList() {
        List<Author> authors = new ArrayList<>();
        Author author = new Author("author");
        List<Book> books = new ArrayList<>();
        author.setBooks(books);
        authors.add(author);
        Mockito.when(authorDao.selectAllAuthors()).thenReturn(authors);
        authors = authorService.selectAllAuthors();
        Assert.assertNotNull(authors);
        Assert.assertEquals(false, authors.isEmpty());
    }

    @Test
    public void test_selectAllAuthorsFromNonEmptyListWithBooksShouldReturnNonEmptyList() {
        List<Author> authors = new ArrayList<>();
        Author author = new Author("author");
        List<Book> books = new ArrayList<>();
        Book book = new Book("name");
        books.add(book);
        author.setBooks(books);
        authors.add(author);
        Mockito.when(authorDao.selectAllAuthors()).thenReturn(authors);
        Mockito.when(bookService.selectBookByName(Mockito.anyString())).thenReturn(Optional.ofNullable(book));
        authors = authorService.selectAllAuthors();
        Assert.assertNotNull(authors);
        Assert.assertEquals(false, authors.isEmpty());
    }

    @Test
    public void test_selectAuthorByIdWithInvalidIdShouldReturnNull() {
        Author author = null;
        Mockito.when(authorDao.selectAuthorById(null)).thenReturn(Optional.ofNullable(author));
        author = authorService.selectAuthorById(null).orElse(null);
        Assert.assertNull(author);
    }

    @Test
    public void test_selectAuthorByIdWithValidIdShouldReturnAuthor() {
        Author author = new Author("author");
        Mockito.when(authorDao.selectAuthorById(Mockito.any(UUID.class))).thenReturn(Optional.ofNullable(author));
        author = authorService.selectAuthorById(UUID.randomUUID()).get();
        Assert.assertNotNull(author);
    }

    @Test
    public void test_deleteAuthorWithInvalidId() {
        Mockito.when(authorDao.deleteAuthor(Mockito.any(UUID.class))).thenReturn(0);
        int result = authorService.deleteAuthor(UUID.randomUUID());
        Assert.assertEquals(0,result);
    }

    @Test
    public void test_deleteAuthorWithValidId() {
        Mockito.when(authorDao.deleteAuthor(Mockito.any(UUID.class))).thenReturn(1);
        int result = authorService.deleteAuthor(UUID.randomUUID());
        Assert.assertEquals(1,result);
    }

    @Test
    public void test_updateAuthorWithNullAuthor() {
        Author author = null;
        int result = authorService.updateAuthor(UUID.randomUUID(), author);
        Assert.assertEquals(0,result);
    }

    @Test
    public void test_updateAuthorWithNonNullAuthor() {
        Author author = new Author("author");
        Mockito.when(authorDao.updateAuthor(Mockito.any(UUID.class), (Mockito.any(Author.class)))).thenReturn(1);
        int result = authorService.updateAuthor(UUID.randomUUID(), author);
        Assert.assertEquals(1,result);
    }


}