import React from 'react';
import { useNavigate } from 'react-router-dom';
import MedicalForm from './MedicalForm';
import './App.css';
import myelipse from './images/elipse.png';
import logo from './images/logo.png';
import laptop from './images/laptop.png';



const HomePage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    // Redirect to the confirmation page with the form data
    navigate(`/confirmation/${encodeURIComponent(formData)}`);
  };

  return (
    <div>
      
      <div className="container">
        <img src={myelipse} className="image" alt=''/>
        <img src={laptop}style={{right:'200px',padding:'20px', position:'absolute',top:'11%'}} alt=''></img>
        <img src={logo} style={{left:'0px',top:'10px',height:'100px',width:'100px',padding:'20px',position:'absolute'}} alt=''></img>

        <div className="overlay-element">
          <h1 style={{color:'black',alignSelf:'center'}}>DISEASE RECOMMENDATION SYSTEM</h1>
          <h3 style={{color:'grey',alignSelf:'center'}}>What is the main symptom you are experiencing?</h3>

          <MedicalForm onFormSubmit={handleFormSubmit} />


        </div>
        <div className='overlay-element2'>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            
            <div className='yellow-box'>
            WORRIED ABOUT YOUR HEALTH ?
            </div>
            <div className='yellow-box'>
            Health TIPS
            </div>
            <div className='yellow-box'>
            FIND SAFE HEALTH
            </div>
            <div className='yellow-box'>
            ILLNESSES
            </div>
            
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'90px'}}>
              <div className='yellow-box'>
              TESTS AND TREATMENTS
              </div>
              <div className='yellow-box'>
              FIRST AID INFORMATION
            </div>
            <div className='yellow-box'>
            MEDICAL TERMS
            </div>
            <div className='yellow-box'>
            ABOUT US
            </div>
          </div>
        </div>
      </div>
    </div>
    
);
};

export default HomePage;
