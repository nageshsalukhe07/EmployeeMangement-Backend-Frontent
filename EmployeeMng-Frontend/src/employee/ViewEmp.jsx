import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewEmp.css'; // Custom CSS file for additional styling
import Header from '../Layout/Header';

export default function ViewEmp() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/admin/findall`)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, []);

  // Delete method
  let deleteemp = (id) => {
    axios
      .delete(`http://localhost:8080/api/admin/deletbyid/${id}`)
      .then((res) => {
        console.log("Data deleted successfully");
        setEmployees(employees.filter((emp1) => emp1.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
      <Header></Header>
      <br /><br /><br /><br /><br /><br /><br />

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '120vh',
      // backgroundImage:
      //   'url("https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'white',
    }}>
    <div className="container mt-5">
      <h1 className="text-white mb-4" style={{ textShadow: '2px 2px 4px black' }}>Employee Data</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={`/updateemp/${emp.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteemp(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}
