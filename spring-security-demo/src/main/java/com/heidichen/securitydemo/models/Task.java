package com.heidichen.securitydemo.models;


import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="tasks")
public class Task {

	@Id
	@GeneratedValue
	private Long id;
	
	@NotBlank(message="You Need a user story")
	private String userstory;
	
	private Boolean status=false;
	
	private Date limitdate;
	
	private int priority;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	
    @ManyToMany(mappedBy = "tasks")
    private List<User> users;
    
    // M:1 with project
  	@ManyToOne(fetch=FetchType.LAZY)
  	@JoinColumn(name="project_id")
  	private Project project;
    
    
    //Empty Constructor
    public Task() {
    	
    }
    
    //Getters and Setters
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUserstory() {
		return userstory;
	}


	public void setUserstory(String userstory) {
		this.userstory = userstory;
	}


	public Boolean getStatus() {
		return status;
	}


	public void setStatus(Boolean status) {
		this.status = status;
	}


	public Date getLimitdate() {
		return limitdate;
	}


	public void setLimitdate(Date limitdate) {
		this.limitdate = limitdate;
	}


	public int getPriority() {
		return priority;
	}


	public void setPriority(int priority) {
		this.priority = priority;
	}


	public Date getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}


	public Date getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}


	public List<User> getUsers() {
		return users;
	}


	public void setUsers(List<User> users) {
		this.users = users;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	
}
