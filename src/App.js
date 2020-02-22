import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          --------------------------------------------------------
        </p>
        <p>
          Tell Me More!!!
        </p>
       
    <select>
    <option value="Culture/Interpersonal/Team">Culture/Interpersonal/Team</option>
    <option value="Safety/Complance/Health">Safety/Complance/Health</option>
    <option selected value="IT">IT</option>
    <option value="Harassment">Harassment</option>
  </select>
  </header>
  </div>
  );
}

  

export default App;
