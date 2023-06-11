import React from 'react';
import { deleteEmployee } from '../services/EmployeeService';

const Employee = ({ employee, fetchEmployees }) => {
  const handleDelete = () => {
    deleteEmployee(employee.id);
    fetchEmployees();
  };

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Employee;