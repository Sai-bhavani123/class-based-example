import React, { useState, useEffect } from 'react';
import './Random.css'; // External CSS

const RandomColor = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeBackground = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div className="container">
      <h1>Click to Generate Background Color</h1>
      <button className="btn" onClick={changeBackground}>
        Generate Color
      </button>
      <p className="color-code">Current Color: <strong>{bgColor}</strong></p>
    </div>
  );
};

export default RandomColor ;
