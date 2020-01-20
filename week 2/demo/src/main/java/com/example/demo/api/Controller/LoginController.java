package com.example.demo.api.Controller;

import java.util.UUID;

import com.example.demo.DemoApplication;
import com.example.demo.api.Model.User;
import com.example.demo.api.Util.JWTGenerator;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/login")
@RestController
public class LoginController {

    private UserController userController;

    public LoginController(UserController userController) {
        this.userController = userController;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody User user) {
        User dbUser = userController.getUserByUsername(user.getUsername());
        if (!dbUser.equals(null)) {
            if (user.getPassword().equals(dbUser.getPassword())) {
                UUID id = UUID.randomUUID();
                DemoApplication.loggedUser = user.getUsername();
                DemoApplication.jwtString = JWTGenerator.createJWT(id.toString(), user.getUsername(), "Logged in",
                        600000);
                return new ResponseEntity<>(DemoApplication.jwtString, HttpStatus.OK);
            }
            return new ResponseEntity<>("Incorrect password", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Incorrect username", HttpStatus.BAD_REQUEST);
    }

}