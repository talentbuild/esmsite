import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Fix the image source */}
        <img
          src={process.env.PUBLIC_URL + '/images/esmlogo.jpg'}
          alt="esmapp logo"
          style={{ width: '200px', height: 'auto' }}
        />
        <h1>Welcome to EsmApp</h1>
        {/* Add a button */}
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
