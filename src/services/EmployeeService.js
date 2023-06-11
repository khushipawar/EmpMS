const employees = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      jobTitle: 'Software Engineer',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      jobTitle: 'Product Manager',
    },
  ];
  
  export const getEmployees = () => {
    return employees;
  };
  
  export const createEmployee = (employee) => {
    employees.push(employee);
  };
  
  export const updateEmployee = (updatedEmployee) => {
    const index = employees.findIndex((employee) => employee.id === updatedEmployee.id);
    if (index !== -1) {
      employees[index] = updatedEmployee;
    }
  };
  
  export const deleteEmployee = (employeeId) => {
    const index = employees.findIndex((employee) => employee.id === employeeId);
    if (index !== -1) {
      employees.splice(index, 1);
    }
  };