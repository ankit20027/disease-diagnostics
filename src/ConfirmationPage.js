import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = () => {
  const { formData } = useParams();

  return (
    <div>
      <h1>Thank you for submitting your information!</h1>
      <p>Your data has been received and will be processed.</p>
      <p>Your input: {decodeURIComponent(formData)}</p>
    </div>
  );
};

export default ConfirmationPage;
