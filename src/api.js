import axios from "axios";

const sendFormDataToBackend = async (formData, setResponse, setLoading) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/getDignostics?query=${encodeURIComponent(formData)}`, {
        headers: { 'Content-Type': 'application/json' }
      })
  
      // const result = await response.json();
      setResponse(response.data);
      console.log(response.data);

    } catch (error) {
      console.error('Error:', error);

    } finally {
      setLoading(false);
    }
  };
  
  export default sendFormDataToBackend;