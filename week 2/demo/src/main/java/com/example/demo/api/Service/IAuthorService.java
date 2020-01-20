package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Author;

import org.springframework.stereotype.Service;

@Service
public interface IAuthorService {

    public int addAuthor(Author author);

    public List<Author> selectAllAuthors();

    public Optional<Author> selectAuthorById(UUID id);

    public int deleteAuthor(UUID id);

    public int updateAuthor(UUID id, Author author);

}