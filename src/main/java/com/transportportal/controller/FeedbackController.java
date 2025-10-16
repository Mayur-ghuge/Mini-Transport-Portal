package com.transportportal.controller;

import com.transportportal.model.Feedback;
import com.transportportal.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // ✅ Add feedback
    @PostMapping("/add")
    public Feedback addFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // ✅ Get all feedbacks
    @GetMapping("/all")
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
}