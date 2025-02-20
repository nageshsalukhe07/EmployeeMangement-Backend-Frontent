import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Layout/Header';



export default function AddEmployee() {
  
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [department, setDepartment] = useState('');
  let [role, setRole] = useState('');
  let [salary, setSalary] = useState('');
  let [successMessage, setSuccessMessage] = useState(''); // Success message state
  let [errorMessage, setErrorMessage] = useState(''); // Error message state

  let employee1;

  let addemployee = (event) => {
    event.preventDefault();

    // Validate salary before proceeding
    if (!salary || isNaN(salary) || parseFloat(salary) <= 0) {
      setErrorMessage('Please enter a valid salary amount.');
      return; // Stop form submission
    }
    setErrorMessage(''); // Clear error message if salary is valid

    employee1 = { name, email, department, role, salary };
    addempdata();
  };

  let addempdata = () => {
    axios
      .post('http://localhost:8080/api/admin/save', employee1)
      .then((response) => {
        console.log(response);
        setSuccessMessage('Employee added successfully!');
        clearInputFields();
        setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let clearInputFields = () => {
    setName('');
    setEmail('');
    setDepartment('');
    setRole('');
    setSalary('');
  };

  return (
    <div>
      <Header></Header>
      
    <div
    
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120vh',
        backgroundImage:
          'url("https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
       
      <h1
        className="text-white mb-4"
        style={{ textShadow: '2px 2px 4px black' }}
      >
        Add Employee
      </h1>

      <form
        onSubmit={addemployee}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          width: '400px',
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Enter name:</label>
          <input
            type="text"
            id="namef"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Enter email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="dep">Enter department:</label>
          <input
            type="text"
            id="dep"
            placeholder="Enter department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="role">Enter role:</label>
          <input
            type="text"
            id="role"
            placeholder="Enter role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="sal">Enter salary:</label>
          <input
            type="text"
            id="sal"
            placeholder="Enter salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
          {errorMessage && (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                marginTop: '5px',
              }}
            >
              {errorMessage}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <input
            type="submit"
            value="Add Employee"
            style={{
              padding: '10px 15px',
              border: 'none',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          />
          {successMessage && (
            <div
              style={{
                marginLeft: '20px',
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              {successMessage}
            </div>
          )}
        </div>
      </form>
    </div>
    </div>
  );
}
