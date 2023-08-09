import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState([]);
  // try catch section
  const handleFetchNumbers = async () => {
    try {
      const response = await fetch(`http://localhost:3002/numbers?url=${urls}`);
      const data = await response.json();
      setResult(data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        {/* input section */}
        <label>Enter URLs (comma-separated): </label>
        <input type="text" value={urls} onChange={(e) => setUrls(e.target.value)} />
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      {/* output section */}
      <div>
        <h2>Result Output:</h2>
        <ul>
          {result.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
