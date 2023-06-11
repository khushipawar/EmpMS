package com.example.ems.controllers;
import com.example.ems.models.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private List<Employee> employees = new ArrayList<>();

    @GetMapping("/")
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @PostMapping("/")
    public Employee createEmployee(@RequestBody Employee employee) {
        employees.add(employee);
        return employee;
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable String id, @RequestBody Employee updatedEmployee) {
        Employee employee = findEmployeeById(id);
        if (employee != null) {
            employee.setName(updatedEmployee.getName());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setJobTitle(updatedEmployee.getJobTitle());
        }
        return employee;
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id) {
        Employee employee = findEmployeeById(id);
        if (employee != null) {
            employees.remove(employee);
        }
    }

    private Employee findEmployeeById(String id) {
        for (Employee employee : employees) {
            if (employee.getId().equals(id)) {
                return employee;
            }
        }
        return null;
    }
}