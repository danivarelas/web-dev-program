package com.example.demo.api.Service;

import java.util.List;
import java.util.Optional;

import com.example.demo.api.DAO.UserDao;
import com.example.demo.api.Model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    private final UserDao userDao;

    @Autowired
    public UserService(UserDao authorDao) {
        this.userDao = authorDao;
    }

    public int addUser(User user) {
        return userDao.insertUser(user.getUsername(), user);
    }

    public List<User> selectAllUsers() {
        return userDao.selectAllUsers();
    }

    public Optional<User> selectUserById(String username) {
        return userDao.selectUserByUsername(username);
    }

    public int deleteUser(String username) {
        return userDao.deleteUser(username);
    }

    public int updateUser(String username, User user) {
        return userDao.updateUser(username, user);
    }

}