import React, { useState } from 'react';

const MedicalForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="your-form">
      <div className="form-group">
        <textarea
          rows="4"
          cols="64"
          style={{fontSize:'20px'  }}
          placeholder="Example: Red spots over body and also feeling fever since last night ETC........"
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
