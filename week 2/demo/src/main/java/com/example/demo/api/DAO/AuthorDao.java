package com.example.demo.api.DAO;

import java.util.List;
import java.util.Optional;

import com.example.demo.api.DTO.AuthorDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorDao extends JpaRepository<AuthorDTO, Long> {

//    int insertAuthor(AuthorDTO authorDTO);

    List<AuthorDTO> findByName(String name);

    AuthorDTO findById(long id);

//    List<AuthorDTO> selectAllAuthors();
//
//    Optional<AuthorDTO> selectAuthorById(long id);
//
//    int deleteAuthor(long id);
//
//    int updateAuthor(long id, AuthorDTO authorDTO);
}