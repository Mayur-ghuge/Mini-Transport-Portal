import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./VehicleSelection.css"; // Styling file

function VehicleSelection() {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [vehicles, setVehicles] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:8080/vehicles/search?type=${type}&location=${location}`
      );
      setVehicles(res.data);
    } catch (err) {
      alert("Error fetching vehicles");
    }
  };

  return (
    <div className="vehicle-selection">
      {/* Vehicle Search Form */}
      <div className="form-container">
        <h2>🚚 Vehicle Selection</h2>
        <form onSubmit={handleSearch}>
          {/* Vehicle Type Dropdown */}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Mini-Truck">Mini-Truck</option>
            <option value="Pickup">Pickup</option>
            <option value="Auto">Auto</option>
            <option value="407">407</option>
          </select>

          {/* Location Dropdown */}
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="Akola">Akola</option>
            <option value="Patur">Patur</option>
            <option value="Akot">Akot</option>
            <option value="Telhara">Telhara</option>
            <option value="Balapur">Balapur</option>
            <option value="Barshitakli">Barshitakli</option>
            <option value="Murtizapur">Murtizapur</option>
          </select>

          {/* Submit Button */}
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Results Section */}
      <div className="results">
        <h3>Available Vehicles</h3>
        {vehicles.length === 0 ? (
          <p className="no-results">No vehicles found. Try another search.</p>
        ) : (
          <ul>
            {vehicles.map((v) => (
              <li key={v.id} className="vehicle-item">
                🚚 <strong>{v.type}</strong> <br />
                🔖 Number Plate: {v.numberPlate} <br />
                📍 Location: {v.location} <br />
                📞 Contact: {v.mobileNumber}
              </li>
            ))}
          </ul>
        )}

        {/* ✅ Feedback button always after the list */}
        <div className="feedback-container">
          <Link to="/feedback" className="feedback-link">
            ✨ Give Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VehicleSelection;
