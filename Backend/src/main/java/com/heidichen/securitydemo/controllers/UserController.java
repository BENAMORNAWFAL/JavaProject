package com.heidichen.securitydemo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.heidichen.securitydemo.models.LoginUser;
import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.models.User;
import com.heidichen.securitydemo.payload.MessageResponse;
import com.heidichen.securitydemo.repositories.UserRepository;
import com.heidichen.securitydemo.services.RoleService;
import com.heidichen.securitydemo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

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
	

	@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles() {
	    List<Role> roles = RoleService.allRoles();
	    System.out.println(roles);
	    return new ResponseEntity<>(roles, HttpStatus.OK);
	}
	
	
	
	@PostMapping("/register")
    public ResponseEntity<?> registerUser( @RequestBody User user) {
		System.out.printf("creation first",user);
		if (userRep.existsByUsername(user.getUsername())) {
	        return ResponseEntity
	                .badRequest()
	                .body(new MessageResponse("Error: Username is already taken!"));
	    }
		if (userRep.existsByEmail(user.getEmail())) {
	        return ResponseEntity
	                .badRequest()
	                .body(new MessageResponse("Error: Email is already in use!"));
	    }
		//Create user
		System.out.printf("creation",user);
		User newuser = new User ();
		newuser.setUsername(user.getUsername());
		newuser.setEmail(user.getEmail());
		newuser.setPassword(user.getPassword());
		newuser.setPasswordConfirmation(user.getPasswordConfirmation());
		newuser.setRole(user.getRole());
		System.out.printf("newuser",newuser.getUsername());
		userService.register(newuser);
	    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

	
	
	
	@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
               
            return ResponseEntity.badRequest().body("Valid credentials");
        
    }


	
}
	
