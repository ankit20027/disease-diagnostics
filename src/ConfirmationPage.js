import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import bck from './images/bck.png';

async function sendMessage(formData) {
  
  const chatbox = document.getElementById('chatbox');
  
  
  if (formData.trim() === '') {
      return;
  }

  // Display user message
//   const userMessage = `<div class="mb-2 flex justify-end">
//                           <div class="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs">
//                               ${decodeURIComponent(formData)}
//                           </div>
//                       </div>`;
//   chatbox.innerHTML += userMessage;

  // Call the ChatGPT-4 API
  const apiUrl = 'https://chatgpt-42.p.rapidapi.com/gpt4';
  const apiKey = 'de08eaf131msh2718a8d9be9f96ep19d577jsn012b0e3493a0'; // Replace with your actual RapidAPI key

  const apiOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
      },
      body: JSON.stringify({
          messages: [
              {
                  role: 'user',
                  content: formData,
              },
          ],
          tone: 'Balanced',
      }),
  };

  try {
      const response = await fetch(apiUrl, apiOptions);
      const result = await response.json();
      const resultText = result.result || 'No response';

      // Display bot message
      const botMessage = `<div class="mb-2 flex">
                              <div class="bg-white-300 text-black-700 py-2 px-4 rounded-lg max-w-xs">
                                  ${resultText}
                              </div>
                          </div>`;
      console.log(resultText);
      chatbox.innerHTML += botMessage;
  } catch (error) {
      console.error('Error sending message:', error);
  }

}



const ConfirmationPage = () => {
  const { formData } = useParams();
  useEffect(() => {
    // Call the async function when the component mounts
    const fetchData = async () => {
      try {
        await sendMessage(formData);
      } catch (error) {
        console.error('Error processing form data:', error);
      }
    };

    fetchData();
  }, [formData]);


  return (
    <div className="container">
    <img src={bck} style={{objectFit:'cover',minHeight:'100%',width:'100%',opacity:'0.9'}}  alt=''/>
    <div id='chatbox'>
      <h1>Thank you for submitting your information!</h1>
      
      {/* <p >Your input: {decodeURIComponent(formData)}</p> */}
      

    </div>
    </div>
  );
};

export default ConfirmationPage;
