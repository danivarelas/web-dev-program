package com.example.demo.api.DAO;

import java.util.UUID;

import com.example.demo.api.Model.Author;

public interface AuthorDao {

    int insertAuthor(UUID id, Author author);

    default int addAuthor(Author author) {
        UUID id = UUID.randomUUID();
        return insertAuthor(id, author);
    }
}