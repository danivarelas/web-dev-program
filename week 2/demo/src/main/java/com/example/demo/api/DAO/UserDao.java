package com.example.demo.api.DAO;

import java.util.List;
import java.util.Optional;

import com.example.demo.api.Model.User;

public interface UserDao {

    int insertUser(String username, User user);

    List<User> selectAllUsers();

    Optional<User> selectUserByUsername(String username);

    int deleteUser(String username);

    int updateUser(String username, User user);

}