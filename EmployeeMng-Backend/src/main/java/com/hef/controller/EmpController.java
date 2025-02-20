package com.hef.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hef.Repository.EmpRepository;
import com.hef.entity.Employee;

@RestController
@RequestMapping("/api/emp")
@CrossOrigin(origins="http://localhost:3000")
public class EmpController {
	
	@Autowired
	private EmpRepository empresp;
	
	@GetMapping("/findall")
	public List<Employee> findAll(){
		return empresp.findAll();
	}

	@GetMapping("/findbyid/{id}")
	public Employee findById(@PathVariable int id) {
		return empresp.findById(id);
	}
}
