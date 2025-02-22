import React, { useState } from 'react';
import '../Tired/Story/story.css';
import Cards from './Cards';

export default function Tunes() {
  const [isVisible, setIsVisible] = useState(true); // State for the description div
  const [isLanguage, setIsLanguage] = useState(false); // State for the Cards component

  const handleClick = () => {
    setIsVisible(false); 
    setIsLanguage(true); 
  };

  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.imgur.com/EGjNwuD.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundStyle}>
      <div className="box">
      <button className="btn" onClick={handleClick}>Explore</button>
      {isLanguage && <Cards />}
      {isVisible && (
        <div className="description">
          
        </div>
      )}
    </div>
    </div>
  );
}
