package com.brainstation.project.api.Service;

import com.brainstation.project.api.DAO.UserDAO;
import com.brainstation.project.api.DTO.UserDTO;
import com.brainstation.project.api.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService {

    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User insertUser(User user) {
        UserDTO userDTO = userDAO.save( new UserDTO(user));
        return new User(userDTO);
    }

    public List<User> selectAllUsers() {
        List<UserDTO> usersDTO = userDAO.findAll();
        List<User> users = new ArrayList<>();
        usersDTO.forEach(userDTO -> {
            users.add(new User(userDTO));
        });
        return users;
    }

    public User selectUserByUsername(String username) {
        UserDTO userDTO = userDAO.findByUsername(username);
        return new User(userDTO);
    }

    public User updateUser(String username, User user) {
        UserDTO userDTO = userDAO.findByUsername(username);
        userDTO.setEmail(user.getEmail());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setCountryCode(user.getCountryCode());
        userDTO.setUsername(user.getUsername());
        userDTO = userDAO.save(userDTO);
        return new User(userDTO);
    }

    /*public int deleteUser(String username) {
        return userDao.deleteUser(username);
    }*/

}