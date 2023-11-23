import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = () => {
  const { formData } = useParams();

  return (
    <div>
      <h1 style={{color:'black'}}>Thank you for submitting your information!</h1>
      <p style={{color:'black'}}>Your data has been received and will be processed.</p>
      <p style={{color:'black'}}>Your input: {decodeURIComponent(formData)}</p>
    </div>
  );
};

export default ConfirmationPage;
