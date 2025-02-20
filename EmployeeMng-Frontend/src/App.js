import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Layout/Footer';
import Axios from './Axios';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AxiosUser from './AxiosUser';
import MapDemo from './MapDemo';
import AddEmp from './employee/AddEmp';
import ViewEmp from './employee/ViewEmp';
import UpdateEmp from './employee/UpdateEmp';
import Service from './Service';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';
import Login from './emppanel/Login';
import AdminDashboard from './employee/AdminDashboard';
import EmployeeDasboard from './employee/EmployeeDasboard';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      
     

        <div className="main-content">
          <Routes>
            
            {/* <Route path="/home" element={<Home/>} /> */}

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/service" element={<Service/>} />

            <Route path="/addemp" element={<AddEmp/>} />
            <Route path="/viewemp" element={<ViewEmp/>} />
            <Route path="/updateemp/:id" element={<UpdateEmp/>} />

            <Route path="/" element={<Login/>} />
            <Route path="/admin/admindashboard" element={<AdminDashboard/>} />
            <Route path="/employee/employeesdashboard" element={<EmployeeDasboard/>} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      {/* <AxiosUser />
      <MapDemo /> */}
     
      
    </div>
  );
}

export default App;