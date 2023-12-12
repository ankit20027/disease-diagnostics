import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import bck from './images/bck.png';
import sendFormDataToBackend from './api.js';

const ConfirmationPage = () => {
  const { formData } = useParams();

  useEffect(() => {
    
    sendFormDataToBackend(formData);
  }, [formData]);

  return (
    <div className="container">
      <img src={bck} style={{ objectFit: 'cover', minHeight: '100%', width: '100%', opacity: '0.9' }} alt='' />
      <div id='chatbox'>
        <h1>Thank you for submitting your information!</h1>
        {/* <p>Your input: {decodeURIComponent(formData)}</p> */}
      </div>
    </div>
  );
};

export default ConfirmationPage;
