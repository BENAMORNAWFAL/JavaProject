package com.heidichen.securitydemo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.models.User;
import com.heidichen.securitydemo.repositories.UserRepository;
import com.heidichen.securitydemo.services.RoleService;
import com.heidichen.securitydemo.services.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/authentication")
public class UserController {
	
	
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService RoleService;
	
	@Autowired
	private UserRepository userRep;
	
	
	
	
//	@GetMapping("/authentication/register")
//	 public ResponseEntity<List<Role>> getRoles() {
//		List<Role> roles = RoleService.allRoles();
//		System.out.println(roles );
//		 return new ResponseEntity<>(roles, HttpStatus.OK);
//	 }
	
	@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles() {
	    List<Role> roles = RoleService.allRoles();
	    System.out.println(roles);
	    return new ResponseEntity<>(roles, HttpStatus.OK);
	}
	
	
	
	@PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user,BindingResult result) {
        // Perform validation and registration logic here
        // You can hash the password before saving it to the database
		
		System.out.println(user.getEmail());
        System.out.println("access successful");
        // Example validation
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }
        
        userService.register(user,result);
        
        System.out.println("User created");
        return ResponseEntity.ok("Registration successful");
    }
	
	
	
	
}
