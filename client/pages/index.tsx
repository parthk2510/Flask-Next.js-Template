import React, { useEffect , useState } from 'react';

function index() {
  const [message, setMessage] = useState("Loading"); // Initialize state with a default value . Message is set to Loading 

  useEffect(() => {
    fetch("http://127.0.0.1:8081/api/home")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => { // Handle the response data for Flask API 
        console.log(data); // Log the fetched data
        setMessage(data.message); // Update state with the fetched data
      });
  }, []); // Empty dependency array:  This effect runs only once after the initial render

  return <div>{message}</div>;
}

export default index;