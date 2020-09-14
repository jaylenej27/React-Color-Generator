import React from 'react';
//random color generation?

export function GetColor() {
  const [color, setColor] = useState(#000000);

  // This is where we're receiving the information
  return (
    <div className={`Color-display`}>
      {GetColor}
      <Button onClick={() => setRandomColor()}>Change name</button>
    </header>
  );
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getRandomCcolor);

//const testColor = () => return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
//console.log(testColor);

//   const RandomColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0');
//   document.body.style.backgroundColor = '#' + randomColor;
//   color.innerHTML = '#' + randomColor;
// };

// genNew.addEventListener('click', GetColor);
// GetColor();

// console.log(GetColor);
