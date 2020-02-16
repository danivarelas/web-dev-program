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

    private final UserDAO userDao;

    public UserService(UserDAO userDao) {
        this.userDao = userDao;
    }

    public User insertUser(User user) {
        UserDTO userDto = userDao.save( new UserDTO(user));
        return new User(userDto);
    }

    public List<User> selectAllUsers() {
        List<UserDTO> usersDto = userDao.findAll();
        List<User> users = new ArrayList<>();
        usersDto.forEach(userDTO -> {
            users.add(new User(userDTO));
        });
        return users;
    }

    public User selectUserByUsername(String username) {
        UserDTO userDto = userDao.findByUsername(username);
        return new User(userDto);
    }

    /*public int deleteUser(String username) {
        return userDao.deleteUser(username);
    }

    public int updateUser(String username, User user) {
        return userDao.updateUser(username, user);
    }*/

}