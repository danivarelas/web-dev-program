package com.example.demo.api.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Author;

public interface AuthorDao {

    int insertAuthor(UUID id, Author author);

    default int insertAuthor(Author author) {
        UUID id = UUID.randomUUID();
        return insertAuthor(id, author);
    }

    List<Author> selectAllAuthors();

    Optional<Author> selectAuthorById(UUID id);

    int deleteAuthor(UUID id);

    int updateAuthor(UUID id, Author author);
}