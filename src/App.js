import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';    // Ensure the correct path
import About from './components/About';  // Ensure the correct path
import Contact from './components/Contact'; // Ensure the correct path
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DoctorList from './components/sections/DoctorList';
import AppointmentList from './components/sections/AppointmentList';
import AvailabilityDates from './components/sections/AvailabilityDates';
import Doctordashboard from './components/Doctordashboard';
import PatientDashboard from './components/PatientDashboard';

function App() {
  // State to hold doctor data
  const [doctors, setDoctors] = useState([]);

  // Function to add a new doctor to the list
  const addDoctor = (doctor) => {
    setDoctors((prevDoctors) => [...prevDoctors, doctor]);
  };

  return (
    <Router>
<Navbar />
<div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointmentlist" element={<AppointmentList />} /> {/* Corrected this line */}
        <Route path="/availabilitydates" element={<AvailabilityDates />} />
        <Route path="/Doctordashboard" element={<Doctordashboard />} /> 
        <Route path="/PatientDashboard" element={<PatientDashboard/>} />


        <Route 
          path="/doctorlist" 
          element={<DoctorList doctors={doctors} />} 
        />
        
      </Routes>
</div>
    </Router>
  );
}

export default App;