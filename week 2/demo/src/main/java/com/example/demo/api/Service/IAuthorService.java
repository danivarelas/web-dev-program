package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DTO.AuthorDTO;
import com.example.demo.api.Model.Author;

import org.springframework.stereotype.Service;

@Service
public interface IAuthorService {

    Author addAuthor(Author author);

    List<Author> selectAllAuthors();

//    public Optional<Author> selectAuthorById(Long id);
//
//    public int deleteAuthor(Long id);
//
//    public int updateAuthor(Long id, Author author);

}