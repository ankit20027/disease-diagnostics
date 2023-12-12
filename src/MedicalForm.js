import React, { useState } from 'react';

const MedicalForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //process dataa
    // console.log(formData);
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="your-form">
      <div className="form-group">
        <textarea
          rows="4"
          cols="64"
          style={{fontSize:'20px'  }}
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
