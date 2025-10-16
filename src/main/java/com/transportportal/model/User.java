package com.transportportal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")   // 👈 better to use plural (users) because 'user' is a reserved keyword in MySQL
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true) // 👈 username must be unique
    private String name;

    @Column(nullable = false)
    private String password;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
