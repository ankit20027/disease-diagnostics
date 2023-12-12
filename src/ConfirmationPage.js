import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import bck from './images/bck.png';
import sendFormDataToBackend from './api.js';

const ConfirmationPage = () => {
  const { formData } = useParams();
  const [response,setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      sendFormDataToBackend(formData, setResponse, setLoading);
    }
    fetchData();
  }, [formData]);
  return (
    <div className="container">
      <img src={bck} style={{ objectFit: 'cover', minHeight: '100%', width: '100%', opacity: '0.9' }} alt='' />
      <div id='chatbox'>
        <h1>Thank you for submitting your information!</h1>
        <p>Your input: {formData}</p>
        {
          loading? <div style={{height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '200px', height: '200px'}}>
              <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
              <path fill="#000" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
                c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
                    <animateTransform 
                      attributeName="transform" 
                      attributeType="XML" 
                      type="rotate"
                      dur="2s" 
                      from="0 50 50"
                      to="360 50 50" 
                      repeatCount="indefinite" />
                </path>
              <path fill="#000" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
                c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
                    <animateTransform 
                      attributeName="transform" 
                      attributeType="XML" 
                      type="rotate"
                      dur="1s" 
                      from="0 50 50"
                      to="-360 50 50" 
                      repeatCount="indefinite" />
                </path>
              <path fill="#000" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
                L82,35.7z">
                    <animateTransform 
                      attributeName="transform" 
                      attributeType="XML" 
                      type="rotate"
                      dur="2s" 
                      from="0 50 50"
                      to="360 50 50" 
                      repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>:
          <div style={{color: 'darkblue', display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
            <p>Dignosed disease: {response['Disease']}</p>
            <p>Early symptoms: {response['SearchResponse']['EarlySymptoms']}</p>
            <p>Precautions: {response['SearchResponse']['Precautions']}</p>
            <p>Medications: {response['SearchResponse']['Medications']}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default ConfirmationPage;
