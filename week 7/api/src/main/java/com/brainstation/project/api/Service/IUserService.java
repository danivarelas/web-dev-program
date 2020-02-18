package com.brainstation.project.api.Service;

import java.util.List;

import com.brainstation.project.api.Model.User;

import org.springframework.stereotype.Service;

@Service
public interface IUserService {

    User insertUser(User user);

    List<User> selectAllUsers();

    User selectUserByUsername(String username);

    User updateUser(String username, User user);

    /*int deleteUser(String username);*/

}