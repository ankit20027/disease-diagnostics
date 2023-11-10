import React, { useState } from 'react';

const MedicalForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any data processing or API calls here if needed
    // Pass the form data to the parent component
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        placeholder="Enter your medical information here..."
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalForm;
