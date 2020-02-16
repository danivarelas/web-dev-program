package com.brainstation.project.api.Service;

import java.util.List;

import com.brainstation.project.api.Model.User;

import org.springframework.stereotype.Service;

@Service
public interface IUserService {

    public User insertUser(User user);

    public List<User> selectAllUsers();

    public User selectUserByUsername(String username);

    /*public int deleteUser(String username);

    public int updateUser(String username, User user);*/

}