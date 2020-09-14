import React from 'react';
import './App.css';

import { DisplayColor } from './display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's color!</h1>
      </header>
      <DisplayColor>
        <button>New Color</button>
      </DisplayColor>
    </div>
  );
}

export default App;
//onClick={handleClick} button
