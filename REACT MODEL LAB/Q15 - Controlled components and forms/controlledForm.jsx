import React, { useState } from 'react';
const ControlledForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const formContainer = {
        maxWidth: "400px",
        border: "1px solid #ccc",
    }
    const form = {
        display: "flex",
        flexDirection: "column"
    }
    const label = {
        marginBottom: "8px"
    }
    const textField = {
        padding: "8px",
        border: "1px solid #ccc",
    }
    const buttonStyle = {
        backgroundColor: "#4caf50",
        color: "white",
        cursor: "pointer"
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
    return (
        <div className="form-container" style={formContainer} >
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={form}>
                <label style={label}>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={textField} />
                <br />
                <label style={label}>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={textField} />
                <br />
                <label style={label}>Email</label>
                <input style={textField} type="email" name="email" value={formData.email} onChange={handleInputChange} />
                <br />
                <label style={label}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} style={textField}></textarea>
                <br />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div >
    );
};
export default ControlledForm;