package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.Model.Author;

import org.springframework.stereotype.Repository;

@Repository
public class AuthorDataAccessService implements AuthorDao {

    private static List<Author> authorsRepository = new ArrayList<>();

    @Override
    public int insertAuthor(UUID id, Author author) {
        authorsRepository.add(new Author(
                id,
                author.getName(),
                author.getCountry(),
                author.getAge(),
                author.getBooks())
        );
        return 1;
    }

    @Override
    public List<Author> selectAllAuthors() {
        return authorsRepository;
    }

    @Override
    public Optional<Author> selectAuthorById(UUID id) {

        return authorsRepository.stream().filter(author -> author.getId().equals(id)).findFirst();
    }

    @Override
    public int deleteAuthor(UUID id) {
        Optional<Author> author = selectAuthorById(id);
        if (author.equals(null)) {
            return 0;
        }
        authorsRepository.remove(author.get());
        return 1;
    }

    @Override
    public int updateAuthor(UUID id, Author author) {
        return selectAuthorById(id).map(p -> {
            int indexOfAuthor = authorsRepository.indexOf(p);
            if (indexOfAuthor >= 0) {
                authorsRepository.set(indexOfAuthor, author);
                return 1;
            }
            return 0;
        }).orElse(0);
    }

}