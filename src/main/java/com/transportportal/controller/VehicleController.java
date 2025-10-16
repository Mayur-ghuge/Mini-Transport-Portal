package com.transportportal.controller;

import com.transportportal.model.Vehicle;
import com.transportportal.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    // ✅ Add a new vehicle
    @PostMapping("/add")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle) {
        Vehicle savedVehicle = vehicleRepository.save(vehicle);
        return ResponseEntity.ok(savedVehicle);
    }

    // ✅ Get all vehicles
    @GetMapping("/all")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        return ResponseEntity.ok(vehicles);
    }

    // ✅ Search vehicles by type and location
    @GetMapping("/search")
    public ResponseEntity<List<Vehicle>> searchVehicles(
            @RequestParam String type,
            @RequestParam String location) {
        List<Vehicle> vehicles = vehicleRepository.findByTypeIgnoreCaseAndLocationIgnoreCase(type, location);
        return ResponseEntity.ok(vehicles);
    }

    // ✅ Update vehicle by ID
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle updatedVehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(id);

        if (optionalVehicle.isPresent()) {
            Vehicle existingVehicle = optionalVehicle.get();
            existingVehicle.setType(updatedVehicle.getType());
            existingVehicle.setNumberPlate(updatedVehicle.getNumberPlate());
            existingVehicle.setLocation(updatedVehicle.getLocation());
            existingVehicle.setMobileNumber(updatedVehicle.getMobileNumber());

            Vehicle savedVehicle = vehicleRepository.save(existingVehicle);
            return ResponseEntity.ok(savedVehicle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Delete vehicle by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        if (vehicleRepository.existsById(id)) {
            vehicleRepository.deleteById(id);
            return ResponseEntity.ok("Vehicle with ID " + id + " deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Vehicle with ID " + id + " not found.");
        }
    }
}
