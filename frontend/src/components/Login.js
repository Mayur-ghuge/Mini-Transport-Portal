import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import CSS file

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/login", { name, password });
      alert("Login successful!");
      navigate("/vehicles"); // Redirect to vehicle page
    } catch (err) {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      {/* Left side - Login Form */}
      <div className="login-left">
        <div className="login-box">
          {/* 🔹 Branding Section */}
          <div className="login-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt="Logo"
              className="login-logo"
            />
            <h1>Mini Transport Portal</h1>
            <p className="subtitle">Fast • Reliable • Easy</p>
          </div>

          {/* 🔹 Login Form */}
          <form onSubmit={handleLogin}>
            <input
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>

          {/* 🔹 Links */}
          <div className="login-links">
            <p>
              Don’t have an account? <Link to="/signup">Create New Account</Link>
            </p>
            <p>
              Want to add a vehicle? <Link to="/add-vehicle">Add Vehicle</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="login-right">
        <img
          src="https://www.logisticmart.com/scripts/images/new_images/hire-truck-tempo-services.jpg"
          alt="Transport"
        />
      </div>
    </div>
  );
}

export default Login;
