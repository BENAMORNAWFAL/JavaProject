package com.heidichen.securitydemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.repositories.RoleRepository;

@Service
public class RoleService {
	// === CRUD ===
	
			@Autowired
			private RoleRepository RoleRepo;
			
			// READ ALL
			public List<Role> allRoles(){
				return RoleRepo.findAll();
			}
			
			// CREATE
			public Role createRole(Role R) {
				return RoleRepo.save(R);
			}
			
			// READ ONE
			public Role findRole(Long id) {
				
				Optional<Role> maybeRole = RoleRepo.findById(id);
				if(maybeRole.isPresent()) {
					return maybeRole.get();
				}else {
					return null;
				}
			}
			
			// UPDATE 
			public Role updateRole(Role R) {
				return RoleRepo.save(R);
			}
			
			// DELETE
			public void deleteRole(Long id) {
				RoleRepo.deleteById(id);
			}
}
