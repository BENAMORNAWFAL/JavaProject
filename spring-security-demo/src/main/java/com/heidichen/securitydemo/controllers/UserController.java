package com.heidichen.securitydemo.controllers;


import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.models.User;
import com.heidichen.securitydemo.services.RoleService;
import com.heidichen.securitydemo.services.UserService;
import com.heidichen.securitydemo.validator.UserValidator;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService RoleService;
	@Autowired
	private User userrole;
	
	@Autowired
	private UserValidator userValidator;
	
	private boolean isAuthenticated() {
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    if (authentication == null || AnonymousAuthenticationToken.class.
	      isAssignableFrom(authentication.getClass())) {
	        return false;
	    }
	    return authentication.isAuthenticated();
	}
	
    @RequestMapping("/register")
    public String registerForm(@ModelAttribute("user") User user,Model model) {
    	List<Role> AllRoles=RoleService.allRoles();
        model.addAttribute("AllRoles", AllRoles);
        return "registrationPage.jsp";
    }
    
    @GetMapping("/login")
    public String login(
    		@ModelAttribute("user") User user,
    		@RequestParam(value="error", required=false) String error, 
    		@RequestParam(value="logout", required=false) String logout, Model model, Principal principal) {
    	 List<Role> AllRoles=RoleService.allRoles();
         model.addAttribute("AllRoles", AllRoles);
    	if(isAuthenticated()) {
    		return "redirect:/home";
    	}
    	
    	if(error != null) {
            model.addAttribute("errorMessage", "Invalid Credentials, Please try again.");
        }
        if(logout != null) {
            model.addAttribute("logoutMessage", "Logout Successful!");
        }
        return "registrationPage.jsp";
    }
    

    
    @PostMapping("/register")
    public String registration(@Valid @ModelAttribute("user") User user, 
    		BindingResult result, Model model,HttpServletRequest request) {
        userValidator.validate(user, result);
       
        if (result.hasErrors()) {
        	 List<Role> AllRoles=RoleService.allRoles();
             model.addAttribute("AllRoles", AllRoles);
            return "registrationPage.jsp";
        }
        
      
        String password = user.getPassword();
        userService.saveWithUserRole(user);
//        userService.saveUserWithAdminRole(user);
		authWithHttpServletRequest(request, user.getUsername(), password);
        
        return "redirect:/login";
    }
    
    // We will call this method to log in newly registered users
 	public void authWithHttpServletRequest(HttpServletRequest request, String username, String password) {
 	    try {
 	        request.login(username, password);
 	    } catch (ServletException e) {
 	    	System.out.println("Login error: " + e);
 	    }
 	}
    

    @RequestMapping(value = {"/", "/home"})
    public String home(Principal principal, Model model) {
        // 1
        String username = principal.getName();
        model.addAttribute("currentUser", userService.findByUsername(username));

        
        User currentUser=userService.findByUsername(username);
        List<Role> role=userService.findByUsername(username).getRoles();
        model.addAttribute("currentRole", role);
        String RoleOfUser="";
        for(Role role1 :currentUser.getRoles()) {
        	System.out.println(RoleOfUser);
        	RoleOfUser=role1.getName();
        }
        System.out.println(RoleOfUser);
        if(RoleOfUser=="Scrum Master") {
        	
        		return "dashboardscrum.jsp";
        	
         	
         }else if(RoleOfUser=="Developer") {
         	return "dashboarddeveloper.jsp";
         }
        
        return "dashboardowner.jsp";
        
        
    }
    
    @RequestMapping("/admin")
    public String adminPage(Principal principal, Model model) {
        String username = principal.getName();
        model.addAttribute("currentUser", userService.findByUsername(username));
        return "adminPage.jsp";
    }
}
