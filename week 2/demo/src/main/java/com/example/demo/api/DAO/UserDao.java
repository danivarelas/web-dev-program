package com.example.demo.api.DAO;

import java.util.Optional;

import com.example.demo.api.Model.User;

public interface UserDao {

    Optional<User> selectUserByUsername(String username);

}