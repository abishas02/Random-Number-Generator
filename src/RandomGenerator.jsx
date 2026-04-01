import React, { useState } from 'react';
import './App.css';

const RandomGenerator = () => {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="card">
      <h2 className="title">Chance Engine: 1 - 100</h2>

      <div className="display-area">
        {number === null ? (
          <p className="placeholder">No number generated yet</p>
        ) : (
          <h1 className="number-text">{number}</h1>
        )}
      </div>

      <div className="button-group">
        <button className="btn-primary" onClick={generateNumber}>
          Generate Random Number
        </button>

        {number !== null && (
          <button className="btn-reset" onClick={() => setNumber(null)}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default RandomGenerator;