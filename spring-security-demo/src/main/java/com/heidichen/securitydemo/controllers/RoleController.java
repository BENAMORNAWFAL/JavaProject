package com.heidichen.securitydemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.heidichen.securitydemo.models.Role;
import com.heidichen.securitydemo.services.RoleService;

@Controller
public class RoleController {
	
	@Autowired
	private RoleService RoleServ;
	
	//Display Route 
	@GetMapping("/role/new")
	public String createRole(@ModelAttribute("role") Role role) {
		return "roles.jsp";
	}
	
	//Action Route
	@PostMapping("/role")
	public String create(@ModelAttribute("role") Role role, BindingResult result) {
	if (result.hasErrors()) {
		
		return "roles.jsp";
	} else {
		Role newRole = RoleServ.createRole(role);
		return "redirect:/";
	}
	
	}
}
