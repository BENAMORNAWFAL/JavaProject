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

import com.heidichen.securitydemo.models.LoginUser;
import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.models.User;
import com.heidichen.securitydemo.payload.MessageResponse;
import com.heidichen.securitydemo.repositories.UserRepository;
import com.heidichen.securitydemo.services.RoleService;
import com.heidichen.securitydemo.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@CrossOrigin(origins = "http://localhost:4200")

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
	public ResponseEntity<?> registerUser(@RequestBody User user, HttpSession session) {
	    System.out.println("Received registration request for user: " + user.getUsername());

	    if (userRep.existsByUsername(user.getUsername())) {
	        System.out.println("Username already taken: " + user.getUsername());
	        return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
	    }

	    if (userRep.existsByEmail(user.getEmail())) {
	        System.out.println("Email already in use: " + user.getEmail());
	        return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
	    }

	    System.out.println("Creating new user: " + user.getUsername());
	    User newuser = new User();
	    newuser.setUsername(user.getUsername());
	    newuser.setEmail(user.getEmail());
	    newuser.setPassword(user.getPassword());
	    newuser.setPasswordConfirmation(user.getPasswordConfirmation());
	    newuser.setRole(user.getRole());

	    System.out.println("Registering user: " + newuser.getUsername());
	    userService.register(newuser);

	    session.setAttribute("user_id", newuser.getId());

	    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}


	
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginUser loginRequest, BindingResult result, HttpSession session) {
	    // Authenticate the user (you can implement your authentication logic here)
	    System.out.println("Received login request for user: " + loginRequest.getUsername());
	    User user = userService.login(loginRequest, result);

	    if (user != null) {
	        // Log the user ID for debugging
	        System.out.println("Authenticated user ID: " + user.getId());

	        // Set the user ID in the session
	        session.setAttribute("user_id", user.getId());

	        return ResponseEntity.ok("Login successful");
	    } else {
	        // Handle authentication failure by returning a 401 status code
	        System.out.println("Authentication failed for user: " + loginRequest.getUsername());
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	    }
	}
	
	@GetMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout successful");
    }

	@GetMapping("/badge")
	public ResponseEntity<User> getUserInf(HttpSession session) {
		Long UserId=(Long) session.getAttribute("user_id");
		System.out.printf("userid+++++",session.getAttribute("user_id"));
		User currentUser = userService.findOne(UserId);
		if (currentUser != null) {
			System.out.printf("+++++++++++",currentUser);
            return ResponseEntity.ok(currentUser);
        } else {
			System.out.printf("++++++++++222+",currentUser);

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
	    
	   
	}
	
}
	
