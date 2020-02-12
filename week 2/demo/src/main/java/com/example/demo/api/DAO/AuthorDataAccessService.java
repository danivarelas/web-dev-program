package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.api.DTO.AuthorDTO;
import com.example.demo.api.Model.Author;

import org.springframework.stereotype.Repository;

@Repository
public abstract class AuthorDataAccessService implements AuthorDao {

    private static List<AuthorDTO> authorsRepository = new ArrayList<>();

//    @Override
//    public int insertAuthor(AuthorDTO authorDTO) {
//        authorsRepository.add(authorDTO);
//        return 1;
//    }

//    @Override
//    public List<AuthorDTO> selectAllAuthors() {
//        return authorsRepository;
//    }
//
//    @Override
//    public Optional<AuthorDTO> selectAuthorById(long id) {
//        return authorsRepository.stream().filter(author -> author.getId().equals(id)).findFirst();
//    }
//
//    @Override
//    public int deleteAuthor(long id) {
//        Optional<AuthorDTO> author = selectAuthorById(id);
//        if (author.equals(null)) {
//            return 0;
//        }
//        authorsRepository.remove(author.get());
//        return 1;
//    }
//
//    @Override
//    public int updateAuthor(long id, AuthorDTO authorDTO) {
//        return selectAuthorById(id).map(p -> {
//            int indexOfAuthor = authorsRepository.indexOf(p);
//            if (indexOfAuthor >= 0) {
//                authorsRepository.set(indexOfAuthor, authorDTO);
//                return 1;
//            }
//            return 0;
//        }).orElse(0);
//    }

}