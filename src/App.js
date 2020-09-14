import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setBg } from './setBg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's color</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Color Generator
        </a>
      </header>
    </div>
  );
}

export default App;
