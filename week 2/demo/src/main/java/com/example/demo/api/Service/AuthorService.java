package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DAO.AuthorDao;
import com.example.demo.api.Model.Author;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    private final AuthorDao authorDao;

    @Autowired
    public AuthorService(AuthorDao authorDao) {
        this.authorDao = authorDao;
    }

    public int addAuthor(Author author) {
        return authorDao.insertAuthor(author);
    }

    public List<Author> selectAllAuthors() {
        return authorDao.selectAllAuthors();
    }

    public Optional<Author> selectAuthorById(UUID id) {
        return authorDao.selectAuthorById(id);
    }

    public int deleteAuthor(UUID id) {
        return authorDao.deleteAuthor(id);
    }

    public int updateAuthor(UUID id, Author author) {
        return authorDao.updateAuthor(id, author);
    }
}