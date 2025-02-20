package com.hef.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hef.Repository.EmpRepository;
import com.hef.entity.Employee;

@Service
public class EmpService {
	@Autowired
	EmpRepository resp;

	public Employee save(Employee emp) {
		return resp.save(emp);
	}

	public List<Employee> saveall(List<Employee> elist) {
		return resp.saveAll(elist);
	}

	public List<Employee> findAll() {
		return resp.findAll();
	}

	public String deleteById(int id) {
		resp.deleteById(id);
		return "record delete successfully";
	}

	public Employee findById(int id) {
		return resp.findById(id);
	}

	public String update(int id, Employee e1) {

		Employee e2 = resp.findById(id);
		 if (e2 == null) {
		        return "Employee not found!";
		    }
		if(e1!=null) {
			if(e1.getId()!=0) {
				e2.setId(e1.getId());
			}
			if(e1.getName()!=null) {
				e2.setName(e1.getName());
			}
			if(e1.getEmail()!=null) {
				e2.setEmail(e1.getEmail());
			}
			if(e1.getDepartment()!=null) {
				e2.setDepartment(e1.getDepartment());
			}
			if(e1.getRole()!=null) {
				e2.setRole(e1.getRole());
			}
			if(e1.getSalary()!=0) {
				e2.setSalary(e1.getSalary());
			}
		}
		resp.save(e2);
		return "update successfully";
	}

	public List<Employee> findByName(String name) {
		return resp.findByName(name);
	}

	public List<Employee> findByEmail(String email) {
		return resp.findByEmail(email);
	}

	public List<Employee> findByDepartment(String department) {
		return resp.findByDepartment(department);
	}

	public List<Employee> findByRole(String role) {
		return resp.findByRole(role);
	}

	public List<Employee> findBySalary(double salary) {
		return resp.findBySalary(salary);
	}
}
