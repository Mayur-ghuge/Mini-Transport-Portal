package com.transportportal.controller;

import com.transportportal.model.User;
import com.transportportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // ✅ Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        // Check if username already exists
        User existingUser = userRepository.findByName(user.getName());
        if (existingUser != null) {
            return ResponseEntity.status(400).body("User already exists!");
        }
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    // ✅ Login user
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("Login attempt: " + user.getName() + " / " + user.getPassword());
        User found = userRepository.findByNameAndPassword(user.getName(), user.getPassword());
        if (found != null) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password!");
        }
    }
}
