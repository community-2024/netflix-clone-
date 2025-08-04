// frontend/src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // The URL points to your backend server.
    axios.get('http://localhost:8000/')
      .then(response => {
        // Set the message state with the data from the backend
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []); // The empty array ensures this effect runs only once

  return (
    <div>
      <h1>Netflix Clone</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;