// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:5000/register', formData);
            alert(response.data.message);
            setFormData({
                firstName: '',
                surname: '',
                phoneNumber: '',
                emailAddress: '',
                residence: '',
                fellowshipName: ''
            });
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="App">
            <h1>Men's Conference Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Surname:</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
                </div>
                <div>
                    <label>Residence:</label>
                    <input type="text" name="residence" value={formData.residence} onChange={handleChange} required />
                </div>
                <div>
                    <label>House of Prophets Fellowship Name:</label>
                    <input type="text" name="fellowshipName" value={formData.fellowshipName} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default App;
