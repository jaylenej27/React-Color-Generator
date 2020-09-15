// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import './App.css';

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

const GenerateButton = css`
  background: transparent;
  border-radius: 10px;
  border: 2px solid;
  margin: 13em 1em;
  padding: 1em 5em;
  position: flex;
  width: 212px;
  height: 54px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's color!</h1>
      </header>
      <div css={ColorSquare(formatColor(color))}>
        <button css={GenerateButton} onClick={() => setColor(chooseColor())}>
          New Color
        </button>
      </div>
      <h2>Your color is: {formatColor(color)}</h2>
    </div>
  );
}

export default App;
