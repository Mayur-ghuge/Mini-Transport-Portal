package com.transportportal.repository;

import com.transportportal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // ✅ Find user by username
    User findByName(String name);

    // ✅ Find user by username + password (for login)
    User findByNameAndPassword(String name, String password);
}
