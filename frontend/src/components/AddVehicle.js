import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddVehicle.css"; // Import CSS

function AddVehicle() {
  const [type, setType] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/vehicles/add", {
        type,
        numberPlate,
        location,
        mobileNumber,
      });
      alert("Vehicle added successfully!");
      navigate("/vehicles");
    } catch (err) {
      alert("Error adding vehicle");
    }
  };

  return (
    <div className="vehicle-page">
      <div className="vehicle-box">
        <h2>Add Vehicle</h2>
        <form onSubmit={handleAdd}>
          {/* Dropdown for Vehicle Type */}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Vehicle Type</option>
            <option value="Mini-Truck">Mini-Truck</option>
            <option value="Pickup">Pickup</option>
            <option value="Auto">Auto</option>
            <option value="407">407</option>
          </select>

          {/* Number Plate */}
          <input
            placeholder="Number Plate"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
          />

          {/* Dropdown for Location */}
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="Akola">Akola</option>
            <option value="Akot">Akot</option>
            <option value="Telhara">Telhara</option>
            <option value="Balapur">Balapur</option>
            <option value="Barshitakli">Barshitakli</option>
            <option value="Murtizapur">Murtizapur</option>
            <option value="Patur">Patur</option>
          </select>

          {/* Mobile Number */}
          <input
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          {/* Submit Button */}
          <button type="submit">Add Vehicle</button>
        </form>
      </div>
    </div>
  );
}

export default AddVehicle;
