package com.heidichen.securitydemo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heidichen.securitydemo.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	List<User> findAll();
	Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    
}