import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MapDemo() {
  const [users, setUsers] = useState([]); // State to store user data

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data); // Set the user data in the state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures this runs only once

  // Handler for update button
  const handleUpdate = (id) => {
    alert(`Update functionality for user ID: ${id} is not implemented yet.`);
    // Logic for updating the user can be added here
  };

  // Handler for delete button
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete user ID: ${id}?`)) {
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
      alert(`User ID: ${id} has been deleted.`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
        <br /><br />
        
      <h1>User Data</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdate(user.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
