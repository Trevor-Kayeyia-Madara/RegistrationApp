// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    phoneNumber: '',
    emailAddress: '',
    residence: '',
    fellowshipName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('https://registrationbackend-1.onrender.com/register', formData);
            // Trigger success toast with custom message
            toast.success(`Thank you, ${formData.firstName}! You have successfully registered for the Daughters of Faith Conference 2024.`, {
              position: "top-center",
              autoClose: 5000, // Auto close after 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
      
      setFormData({
        firstName: '',
        surname: '',
        phoneNumber: '',
        emailAddress: '',
        residence: '',
        fellowshipName: ''
      });
    } catch (error) {
      toast.error('An error occurred. Please try again.'); // Toast for error
    }
  };

  return (
    <div className="App">
      <h1>Daughters of Faith Conference 2024 28th September</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address:</label>
          <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="residence">Residence:</label>
          <input type="text" id="residence" name="residence" value={formData.residence} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="fellowshipName">Micro-Church:</label>
          <input type="text" id="fellowshipName" name="fellowshipName" value={formData.fellowshipName} onChange={handleChange} required />
        </div>
        <button type="submit">Register to attend. God Bless You</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
