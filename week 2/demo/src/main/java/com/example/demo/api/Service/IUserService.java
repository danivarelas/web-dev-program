package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;

import com.example.demo.api.Model.User;

import org.springframework.stereotype.Service;

@Service
public interface IUserService {

    public int addUser(User user);

    public List<User> selectAllUsers();

    public Optional<User> selectUserById(String username);

    public int deleteUser(String username);

    public int updateUser(String username, User user);

}