// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import './App.css';
import { ContrastButton } from './Button.js';

function ColorSquare(background) {
  return css`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border: 2px solid #000;
    border-radius: 20px;
    background: ${background};
  `;
}

// format to display users color and apply to background
const formatColor = (ary) => {
  return 'rgb(' + ary.join(', ') + ')';
};

// rendering function
function App() {
  // set initial state of color
  const [color, setColor] = useState([235, 190, 190]);

  // generate random number
  const chooseColor = () => {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  };

  // is background light or dark
  const isLight = () => {
    const rgb = color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's color!</h1>
      </header>
      <div css={ColorSquare(formatColor(color))}>
        <ContrastButton
          light={isLight(color)}
          onClick={() => setColor(chooseColor())}
        >
          New Color
        </ContrastButton>
      </div>
      <h2>Your color is: {formatColor(color)}</h2>
    </div>
  );
}

export default App;
