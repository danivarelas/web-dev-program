package com.brainstation.project.api.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.brainstation.project.ProjectApplication;
import com.brainstation.project.api.Model.User;
import com.brainstation.project.api.Service.UserService;
import com.brainstation.project.api.Util.JWTProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/v1/user")
@RestController
public class UserController {

    private final UserService userService;
    private HttpServletRequest request;

    @Autowired
    public UserController(UserService userService, HttpServletRequest request) {
        this.userService = userService;
        this.request = request;
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.insertUser(user);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        if (JWTProvider.validateToken(request.getHeader("JWT"))) {
            return new ResponseEntity<>(userService.selectAllUsers() , HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("byUsername/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable(name = "username") String username) {
        if (JWTProvider.validateToken(request.getHeader("JWT"))) {
            return new ResponseEntity<>(userService.selectUserByUsername(username) , HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null , HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("byEmail/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable(name = "email") String email) {
        if (JWTProvider.validateToken(request.getHeader("JWT"))) {
            return new ResponseEntity<>(userService.selectUserByEmail(email) , HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null , HttpStatus.UNAUTHORIZED);
        }
    }

    @PutMapping("{username}")
    public void updateUser(@PathVariable("username") String username, @RequestBody User user) {
        userService.updateUser(username, user);
    }

    /*@DeleteMapping("{username}")
    public void deleteUser(@PathVariable("username") String username) {
        userService.deleteUser(username);
    }*/


}