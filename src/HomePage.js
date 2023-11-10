import React from 'react';
import { useNavigate } from 'react-router-dom';
import MedicalForm from './MedicalForm';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    // Redirect to the confirmation page with the form data
    navigate(`/confirmation/${encodeURIComponent(formData)}`);
  };

  return (
    <div>
      <div className="container">
        <h1>Welcome to the Medical Website</h1>
        <MedicalForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default HomePage;
