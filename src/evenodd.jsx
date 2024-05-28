import './evenodd.css'
import React, { useState } from 'react';

const EvenOddChecker = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const incrementNumber = () => {
    setNumber(number + 1);
    setResult('');
  };

  const checkEvenOdd = () => {
    setResult(number % 2 === 0 ? 'Even' : 'Odd');
  };

  return (
    <div className="container">
      <h2 className="number">Number: {number}</h2>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={checkEvenOdd}>Check Even/Odd</button>
      {result && <p className="result">The incremented number is {result}</p>}
    </div>
  );
};

export default EvenOddChecker;