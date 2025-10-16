package com.transportportal.repository;

import com.transportportal.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    // ✅ Search vehicles by type and location (case-insensitive)
    List<Vehicle> findByTypeIgnoreCaseAndLocationIgnoreCase(String type, String location);
}
