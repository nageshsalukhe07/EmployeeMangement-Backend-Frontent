import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmpHeader from '../Layout/EmpHeader';

export default function EmployeeDasboard() {
  let [employees, setEmployees] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/emp/findall`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setEmployees(res.data);
        } else {
          console.error("Expected an array but received:", res.data);
          setError("Invalid data format received from the server.");
        }
      })
      .catch((error) => {
        console.log("Error fetching employee data:", error);
        setError("Failed to fetch employee data.");
      });
  }, []);

  let [id, setId] = useState(0);
  let [selectedemp, setSelectedemp] = useState();
  let handlesearch = () => {
    if (!id) {
      alert("Please enter a valid Employee id");
      return;
    }
    axios
      .get(`http://localhost:8080/api/emp/findbyid/${id}`)
      .then((res) => {
        console.log("Employee by id :", res.data);
        setSelectedemp(res.data);
      })
      .catch((error) => {
        console.error("Error fetching employee by id:", error);
        alert("Employee not found");
      });
  };

  return (
    <div>
        
      <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br />
      <EmpHeader></EmpHeader>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        }}
      >
        <div className="container mt-5">
          <h1 className="text-white mb-4" style={{ textShadow: '2px 2px 4px black' }}>Employee List</h1>

          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
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
                    </tr>
                  ))}
                </tbody>
              </table>
              <h1>Search Employee by id</h1>
              <label htmlFor="">Enter employee id for search</label>
              <input type="number" placeholder='Enter Employee id' onChange={(e) => { setId(e.target.value) }} />
              <br /><br />
              <input type="submit" value="search" onClick={handlesearch} /><br /><br />
              {selectedemp ? (
                <div>
                  <h1>Id</h1>: {selectedemp.id}
                </div>
              ) : (
                <div>
                  <h1>No Employee Selected</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
