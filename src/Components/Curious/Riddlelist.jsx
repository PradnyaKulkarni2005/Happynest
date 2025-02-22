import React, { useState } from 'react';
import riddles from '../../data/riddles.json'; // Import the riddles JSON file
import './riddle.css'
const Riddlelist = () => {
  // Create a state to track which riddles have their answers revealed
  const [showAnswers, setShowAnswers] = useState(Array(riddles.length).fill(false));

  // Function to handle button click and show answer for the clicked riddle
  const handleShowAnswer = (index) => {
    const updatedAnswers = [...showAnswers];
    updatedAnswers[index] = true; // Show answer for the clicked riddle
    setShowAnswers(updatedAnswers);
  };

  return (
    <div className="">
      <div className="maindivision">
      {riddles.map((riddle, index) => (
        <div class="textcard">
        
        <div
          key={index}
          className="textcard-info"
        >
            <div className="content">
          <p className="question">{riddle.riddle}</p>
          <button
            onClick={() => handleShowAnswer(index)}
            className="shadow__btn"
          >
            {showAnswers[index] ? riddle.answer : 'See Answer'}
          </button>
          </div>
          
        </div>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Riddlelist;
