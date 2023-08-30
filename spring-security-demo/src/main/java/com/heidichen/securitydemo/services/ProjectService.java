package com.heidichen.securitydemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heidichen.securitydemo.models.Project;
import com.heidichen.securitydemo.repositories.ProjectRepository;

@Service
public class ProjectService {
	// === CRUD ===
	@Autowired
	private ProjectRepository ProjectRep;
	
	// READ ALL
	public List<Project> allTasks(){
		return ProjectRep.findAll();
	}
	
	// CREATE
	public Project createProject(Project P) {
		return ProjectRep.save(P);
	}
	
	// READ ONE
	public Project findProject(Long id) {
		
		Optional<Project> maybeProject = ProjectRep.findById(id);
		if(maybeProject.isPresent()) {
			return maybeProject.get();
		}else {
			return null;
		}
	}
	
	// UPDATE 
	public Project updateProject(Project P) {
		return ProjectRep.save(P);
	}
	
	// DELETE
	public void deleteProject(Long id) {
		ProjectRep.deleteById(id);
	}
}
