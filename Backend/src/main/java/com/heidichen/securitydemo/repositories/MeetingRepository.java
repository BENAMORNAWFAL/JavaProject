package com.heidichen.securitydemo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heidichen.securitydemo.models.Meeting;

@Repository
public interface MeetingRepository extends CrudRepository<Meeting, Long> {

	List<Meeting> findAll();
	
	Optional<Meeting> findById(Long id);
	
	
}
