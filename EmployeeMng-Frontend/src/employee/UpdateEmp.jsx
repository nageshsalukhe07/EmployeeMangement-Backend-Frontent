import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Layout/Header';

export default function UpdateEmp() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState(0.0);
  const [successMessage, setSuccessMessage] = useState(''); // Success message state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/admin/findbyid/${id}`)
      .then((response) => {
        const employee = response.data;
        setName(employee.name);
        setEmail(employee.email);
        setDept(employee.department);
        setRole(employee.role);
        setSalary(employee.salary);
      })
      .catch((error) => {
        console.error('Error fetching employee:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      name,
      email,
      department: dept,
      role,
      salary: parseFloat(salary),
    };
    axios
      .put(`http://localhost:8080/api/admin/update/${id}`, updatedEmployee)
      .then((response) => {
        setSuccessMessage('Employee updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000); // Hide success message after 3 seconds
      })
      .catch((error) => {
        setErrorMessage('Error updating employee');
        console.error('Error updating employee:', error);
      });
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
      <h2 className="text-white mb-4" style={{ textShadow: '2px 2px 4px black' }}>
        Update Employee
      </h2>

      <form
        onSubmit={handleUpdate}
        className="p-4 bg-dark text-white rounded shadow"
        style={{ width: '400px', opacity: '0.9' }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            placeholder="Enter department"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role:
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter role"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary:
          </label>
          <input
            type="number"
            className="form-control"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
            required
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Update"
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
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
              }}
            >
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div
              style={{
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#dc3545',
                color: 'white',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
              }}
            >
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </div>
    </div>
  );
}
