// src/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticketType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Ticket Type</label>
        <select name="ticketType" value={formData.ticketType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="VIP">VIP</option>
          <option value="Regular">Regular</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
