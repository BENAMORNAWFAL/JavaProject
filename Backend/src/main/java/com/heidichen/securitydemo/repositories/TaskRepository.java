package com.heidichen.securitydemo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heidichen.securitydemo.models.Task;


@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

	List<Task> findAll();
	
	Optional<Task> findById(Long id);
	
}
