import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(0); // number instead of string
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!rating || rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5 ⭐");
      return;
    }

    try {
      await axios.post("http://localhost:8080/feedbacks/add", {
        rating: parseInt(rating, 10), // convert to integer
        message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-form-container">
        <h2>✨ Share Your Feedback</h2>
        {submitted ? (
          <p>✅ Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Rate my portal (1–5):</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))} // force number
              required
            >
              <option value="">Select</option>
              <option value={1}>1 - Bad</option>
              <option value={2}>2 - Okay</option>
              <option value={3}>3 - Good</option>
              <option value={4}>4 - Very Good</option>
              <option value={5}>5 - Excellent</option>
            </select>

            <label>Message (optional):</label>
            <textarea
              placeholder="Write your feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Submit Feedback</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Feedback;