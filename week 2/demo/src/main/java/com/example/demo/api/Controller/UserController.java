package com.example.demo.api.Controller;

import java.util.List;

import javax.validation.Valid;

import com.example.demo.api.Exception.ObjectNotFoundException;
import com.example.demo.api.Model.User;
import com.example.demo.api.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NonNull;

@RequestMapping("api/v1/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.selectAllUsers();
    }

    @GetMapping(path = "{username}")
    public User getUserById(@PathVariable("username") String username) {
        return userService.selectUserById(username).orElse(null);
    }

    @DeleteMapping(path = "{username}")
    public void deleteUser(@PathVariable("username") String username) {
        try {
            userService.deleteUser(username);
        } catch (ObjectNotFoundException e) {

        }
    }

    @PutMapping(path = "{username}")
    public void updateUser(@PathVariable("username") String username, @Valid @NonNull @RequestBody User user) {
        userService.updateUser(username, user);
    }
}