import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { createEmployee, updateEmployee } from '../services/EmployeeService';

const EmployeeForm = ({ employeeToEdit, fetchEmployees }) => {
  const [employee, setEmployee] = useState(employeeToEdit || {});
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!employee.name || !employee.email || !employee.jobTitle) {
      setError('All fields are required');
      return;
    }

    if (employee.id) {
      updateEmployee(employee);
    } else {
      const newEmployee = { ...employee, id: uuidv4() };
      createEmployee(newEmployee);
    }

    setEmployee({});
    fetchEmployees();
    setError('');
  };

  return (
    <div>
      <h2>{employeeToEdit ? 'Edit Employee' : 'Add Employee'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employee.name || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employee.email || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Job Title:</label>
          <input type="text" name="jobTitle" value={employee.jobTitle || ''} onChange={handleChange} />
        </div>
        <button type="submit">{employeeToEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;