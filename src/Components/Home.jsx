import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import "./homecss.css";

const Home = () => {
 const navigate = useNavigate();
   const handleClick = (soundFile, route) => {
     const audio = new Audio(process.env.PUBLIC_URL + soundFile);
     audio.play(); // Play the sound
     setTimeout(() => {
       navigate(route); // Navigate to the route after the sound starts playing
     }, 300); // Delay navigation slightly to allow the sound to play
   };
  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.imgur.com/RkhdXr3.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={backgroundStyle}>
      

      {/* Title */}
      <div className="title">HappyNEST</div>

      {/* Heading */}
      <div className="heading">What’s Your Mood Today?</div>

      {/* Mood Images and Labels */}
      <div className="mood-container">
        <div className="mood">
          <img
            src="https://i.imgur.com/gmFKASW.png"
            alt="Excited"
            className="mood-image"
            onClick={() => handleClick('/pop-1.mp3','/excited')}
          />
          <div className="mood-label "><h1>Excited</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/HtwwT6a.png"
            alt="Bored"
            className="mood-image"
            onClick={() => handleClick('/pop-1.mp3','/bored')}
          />
          <div className="mood-label"><h1>Bored</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/xIwmvua.png"
            alt="Scared"
            className="mood-image"
            onClick={() => handleClick('/pop-1.mp3','/scared')}
          />
          <div className="mood-label"><h1>Scared</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/WksI2H4.png"
            alt="Tired"
            className="mood-image"
            onClick={() => handleClick('/pop-1.mp3','/tired')}
          />
          <div className="mood-label"><h1>Tired</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/2CyqVQU.png"
            alt="Curious"
            className="mood-image"
            onClick={() => handleClick('/pop-1.mp3','/curious')}
          />
          <div className="mood-label"><h1>Curious</h1></div>
        </div>
      </div>

      

      
    </div>
  );
};

export default Home;
