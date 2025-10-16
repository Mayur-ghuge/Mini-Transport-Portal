import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VehicleSelection from "./components/VehicleSelection";
import AddVehicle from "./components/AddVehicle";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route redirects to login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ✅ Login page */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Vehicle page */}
        <Route path="/vehicles" element={<VehicleSelection />} />

        {/* ✅ Add Vehicle page */}
        <Route path="/add-vehicle" element={<AddVehicle />} />

        {/* ✅ Feedback page */}
        <Route path="/feedback" element={<Feedback />} />

        {/* ✅ Catch-all route (unknown URL → redirect to login) */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;