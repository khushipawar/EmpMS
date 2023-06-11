import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import { getEmployees } from '../services/EmployeeService';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try{
        const response = await axios.get('/api/employees/');
        setEmployees(response.data);
    }
    catch(error)
    {
        console.log('Error retrieving employees: ',error);
    }
    // const fetchedEmployees = getEmployees();
    // setEmployees(fetchedEmployees);
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((employee) => (
          <Employee key={employee.id} employee={employee} fetchEmployees={fetchEmployees} />
        ))
      )}
    </div>
  );
};

export default EmployeeList;