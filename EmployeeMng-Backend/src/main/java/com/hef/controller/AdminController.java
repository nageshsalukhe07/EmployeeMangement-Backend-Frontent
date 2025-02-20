package com.hef.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hef.entity.Employee;
import com.hef.service.EmpService;


@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins="http://localhost:3000")//Allow React (running on  3000) to access spring boot data
public class AdminController {
	
	@Autowired
	EmpService service;
	
	@PostMapping("/save")
	public Employee save(@RequestBody Employee emp) {
		return service.save(emp);
	}
	
	@PostMapping("/saveall")
	public List<Employee> saveall(@RequestBody List<Employee> elist){
		return service.saveall(elist);
	}
	
	@GetMapping("/findall")
	public List<Employee> findAll(){
		return service.findAll();
	}

	@DeleteMapping("/deletbyid/{id}")
	public String deleteById(@PathVariable int id) {
		return service.deleteById(id);
		
	}
	
	@GetMapping("/findbyid/{id}")
	public Employee findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public String update(@PathVariable int id, @RequestBody Employee e1) {
		return service.update(id, e1);
	}
	
	@GetMapping("/findbyname/{name}")
	public List<Employee> findByName(@PathVariable String name) {
		return service.findByName(name);
	}
	
	@GetMapping("/findbyemail/{email}")
	public List<Employee> findByEmail(@PathVariable String email) {
		return service.findByEmail(email);
	}
	
	@GetMapping("/findbydep/{department}")
	public List<Employee> findByDepartment(@PathVariable String department) {
		return service.findByDepartment(department);
	}
	
	@GetMapping("/findbyrole/{role}")
	public List<Employee> findByRole(@PathVariable String role) {
		return service.findByRole(role);
	}
	
	@GetMapping("/findbysal/{salary}")
	public List<Employee> findBySalary(@PathVariable double salary) {
		return service.findBySalary(salary);
	}

}
