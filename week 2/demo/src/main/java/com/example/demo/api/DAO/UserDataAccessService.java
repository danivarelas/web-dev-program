package com.example.demo.api.DAO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.api.Model.User;

import org.springframework.stereotype.Repository;

@Repository
public class UserDataAccessService implements UserDao {

    private static List<User> usersRepository;

    public UserDataAccessService() {
        usersRepository = new ArrayList<>();
    }

    @Override
    public int insertUser(String username, User user) {
        usersRepository.add(new User(username, user.getPassword()));
        return 1;
    }

    @Override
    public Optional<User> selectUserByUsername(String username) {
        return usersRepository.stream().filter(user -> user.getUsername().equals(username)).findFirst();
    }

    @Override
    public List<User> selectAllUsers() {
        return usersRepository;
    }

    @Override
    public int deleteUser(String username) {
        Optional<User> user = selectUserByUsername(username);
        if (user.equals(null)) {
            return 0;
        }
        usersRepository.remove(user.get());
        return 1;
    }

    @Override
    public int updateUser(String username, User user) {
        return selectUserByUsername(username).map(p -> {
            int indexOfUser = usersRepository.indexOf(p);
            if (indexOfUser >= 0) {
                usersRepository.set(indexOfUser, user);
                return 1;
            }
            return 0;
        }).orElse(0);
    }

}