package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.api.Model.User;

import org.springframework.stereotype.Repository;

@Repository
public class UserDataAccessService implements UserDao {

    private static List<User> booksRepository = new ArrayList<>();

    @Override
    public Optional<User> selectUserByUsername(String username) {
        return booksRepository.stream().filter(user -> user.getUsername().equals(username)).findFirst();
    }

}