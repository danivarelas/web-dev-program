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

@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
public class UserController {

    private final UserService userService;
    private HttpServletRequest request;

    @Autowired
    public UserController(UserService userService, HttpServletRequest request) {
        this.userService = userService;
        this.request = request;
    }

    @PostMapping("api/v1/user")
    public void addUser(@RequestBody User user) {
        user.setRole("admin");
        userService.insertUser(user);
    }

    @GetMapping("api/v1/user")
    public ResponseEntity<List<User>> getAllUsers() {
        if (JWTProvider.validateToken(request.getHeader("JWT"))) {
            return new ResponseEntity<>(new ArrayList<>() , HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity<>(userService.selectAllUsers() , HttpStatus.OK);
        }
    }

    @GetMapping(path = "api/v1/user/{username}")
    public User getUserByUsername(@PathVariable("username") String username) {
        return userService.selectUserByUsername(username);
    }

    @PostMapping("api/v1/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User dbUser = this.getUserByUsername(user.getUsername());
        if (dbUser != null) {
            if (user.getPassword().equals(dbUser.getPassword())) {
                String jwt = JWTProvider.createJWT(dbUser.getId()+"", dbUser.getUsername(), dbUser.getRole(), "Logged in",
                        600000);
                return new ResponseEntity<>(jwt, HttpStatus.OK);
            }
            return new ResponseEntity<>("Incorrect password", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Incorrect username", HttpStatus.BAD_REQUEST);
    }

    /*@DeleteMapping(path = "{username}")
    public void deleteUser(@PathVariable("username") String username) {
        userService.deleteUser(username);
    }

    @PutMapping(path = "{username}")
    public void updateUser(@PathVariable("username") String username, @Valid @NonNull @RequestBody User user) {
        userService.updateUser(username, user);
    }*/
}