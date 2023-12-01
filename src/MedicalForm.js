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
    <form onSubmit={handleSubmit} className="your-form">
      <div className="form-group">
        <textarea
          rows="8"
          cols="64"
          placeholder="Example: headache, vomiting ETC........"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MedicalForm;
