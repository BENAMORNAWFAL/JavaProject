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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="projects")
public class Project {

	@Id
	@GeneratedValue
	private Long id;
	
	@NotBlank(message="You need a name Of project")
	private String name;
	
	private enum status{todo, pending, done};
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
    // M:1 with User
 	@ManyToOne(fetch=FetchType.LAZY)
 	@JoinColumn(name="user_id")
 	private User user;
 	
 	
 	//1:M with Tasks
 	@OneToMany(mappedBy="project",fetch=FetchType.LAZY)
 	List<Task> listtasks;
 	
 	//Empty constructor
 	public Project() {
 		
 	}
 	
 	//Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Task> getListtasks() {
		return listtasks;
	}

	public void setListtasks(List<Task> listtasks) {
		this.listtasks = listtasks;
	}
	
	
	
	
	
	
}
