import React, { useState } from 'react';
import './PensionForm.css';

const PensionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationalInsurance: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    employmentStatus: '',
    employerName: '',
    annualIncome: '',
    pensionType: '',
    contribution: '',
    startAge: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="pension-form-container">
      <h2>Pension Application</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="form-group">
          <label>Full Name:</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>National Insurance Number:</label>
          <input name="nationalInsurance" value={formData.nationalInsurance} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address:</label>
          <input name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Postcode:</label>
          <input name="postcode" value={formData.postcode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input name="country" value={formData.country} onChange={handleChange} disabled />
        </div>

        {/* Employment Info */}
        <div className="form-group">
          <label>Employment Status:</label>
          <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Unemployed</option>
            <option>Retired</option>
          </select>
        </div>
        {formData.employmentStatus === 'Employed' || formData.employmentStatus === 'Self-employed' ? (
          <>
            <div className="form-group">
              <label>Employer Name:</label>
              <input name="employerName" value={formData.employerName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Annual Income (£):</label>
              <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
            </div>
          </>
        ) : null}

        {/* Pension Info */}
        <div className="form-group">
          <label>Type of Pension:</label>
          <select name="pensionType" value={formData.pensionType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option>State Pension</option>
            <option>Workplace Pension</option>
            <option>Private Pension</option>
          </select>
        </div>
        <div className="form-group">
          <label>Monthly Contribution (£):</label>
          <input type="number" name="contribution" value={formData.contribution} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Desired Pension Start Age:</label>
          <input type="number" name="startAge" value={formData.startAge} onChange={handleChange} required />
        </div>

        {/* Agreement */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default PensionForm;
