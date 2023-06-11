import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">Employee Management System</h1>
      <div className="content-container">
        <EmployeeList />
        <EmployeeForm />
      </div>
    </div>
  );
};

export default App;