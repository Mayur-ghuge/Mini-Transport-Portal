package com.transportportal.model;

import jakarta.persistence.*;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating; // 1–5 stars
    private String message; // Optional comment

    public Feedback() {}

    public Feedback(int rating, String message) {
        this.rating = rating;
        this.message = message;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
