
const sendFormDataToBackend = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/getDignostics?query=${encodeURIComponent(formData)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
  
      const result = await response.json();
      console.log(result); // Handle the result as needed
  
    } catch (error) {
      console.error('Error sending form data to backend:', error);
    }
  };
  
  export default sendFormDataToBackend;
  