package com.heidichen.securitydemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heidichen.securitydemo.models.Task;
import com.heidichen.securitydemo.repositories.TaskRepository;

@Service
public class TaskService {
				
	// === CRUD ===
				@Autowired
				private TaskRepository TaskRep;
				
				// READ ALL
				public List<Task> allTasks(){
					return TaskRep.findAll();
				}
				
				// CREATE
				public Task createTask(Task T) {
					return TaskRep.save(T);
				}
				
				// READ ONE
				public Task findTask(Long id) {
					
					Optional<Task> maybeTask = TaskRep.findById(id);
					if(maybeTask.isPresent()) {
						return maybeTask.get();
					}else {
						return null;
					}
				}
				
				// UPDATE 
				public Task updateTask(Task R) {
					return TaskRep.save(R);
				}
				
				// DELETE
				public void deleteTask(Long id) {
					TaskRep.deleteById(id);
				}
}
