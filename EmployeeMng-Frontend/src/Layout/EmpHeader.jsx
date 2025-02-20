import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS
import emppn from '../images/emppn.png';

export default function EmpHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
        {/* <Link className="nav-link text-light" to="#">Employee Management System</Link> */}
        <Link className="nav-link text-light" to="/home"><img src={emppn} alt="Employee Logo" className="logo" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link text-light" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/service">
                  Service
                </Link>
              </li>
            </ul>
          </div>
    <div className="App d-flex justify-content-end p-1">
      <Link className="btn btn-outline-light" state={{marginLeft:"20px"}} to="/">Logout</Link>
    </div>
        </div>
      </nav>
    </div>
  );
}