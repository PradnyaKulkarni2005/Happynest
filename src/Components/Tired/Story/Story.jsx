import React, { useState } from 'react';
import './story.css';
import Cards from './Cards';

export default function Story() {
  const [isVisible, setIsVisible] = useState(true); // State for the description div
  const [isLanguage, setIsLanguage] = useState(false); // State for the Cards component

  const handleClick = () => {
    setIsVisible(false); 
    setIsLanguage(true); 
  };

  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.imgur.com/rbjru1b.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundStyle}>
      <button className="btn" onClick={handleClick}>Explore</button>
      {isLanguage && <Cards />}
      {isVisible && (
        <div className="description">
          <div className="text-block-1">Nighttime Tales for Little Dreamers</div>
          <div className="text-block-2">
            Exciting adventures and gentle whispers that make bedtime fun and memorable.
          </div>
        </div>
      )}
    </div>
  );
}
