package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.example.demo.api.Model.Author;

public class AuthorDataAccessService implements AuthorDao{

    private static List<Author> authors = new ArrayList<>() ;

    @Override
    public int insertAuthor(UUID id, Author author) {
        authors.add(new Author(id, author.getName()));
        return 0;
    }

}