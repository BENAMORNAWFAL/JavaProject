package com.heidichen.securitydemo.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="roles")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Role {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    private String name;
   
    //1:M with user
   	@OneToMany(mappedBy="role",fetch=FetchType.LAZY)
   	List<User> listUsers;
   	
//    @ManyToMany(mappedBy = "roles")
//    private List<User> users;
    
    public Role() {}
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	

	public List<User> getListUsers() {
		return listUsers;
	}

	public void setListUsers(List<User> listUsers) {
		this.listUsers = listUsers;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
    
    
    
}
