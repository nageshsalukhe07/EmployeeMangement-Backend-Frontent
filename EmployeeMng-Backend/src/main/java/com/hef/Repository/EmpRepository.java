package com.hef.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hef.entity.Employee;

@Repository
public interface EmpRepository extends JpaRepository<Employee, Integer> {
	
//	public Employee save(Employee emp);
//	public List<Employee> saveall(List<Employee> elist);
	public Employee findById(int id);
	public List<Employee> findByName(String name);
	public List<Employee> findByEmail(String email);
	public List<Employee> findByDepartment(String department);
	public List<Employee> findByRole(String role);
	public List<Employee> findBySalary(double salary);
		

}
