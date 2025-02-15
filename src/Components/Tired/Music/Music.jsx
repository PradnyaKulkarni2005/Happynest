import React from 'react';
import { useState } from 'react';
import './music.css';
import Cards from '../Cards';

export default function Music() {
  const [isVisible, isSetVisible] = useState(true);
  const [isLanguage, setIsLanguage] = useState(false);

  const handleclick = () => {
    isSetVisible(false);
    setIsLanguage(true);
  };
  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.imgur.com/2zQZtp3.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <button className="btn" onClick={handleclick}>Explore</button>
              { isLanguage &&
              <Cards/>
            }
        {isVisible &&
        <div className='description'>
        <div className="music-title">Dreamy Melodies to Relax Your Soul</div>
        <div className="music-subtitle">
          Music that speaks to the heart and calms the mind.
        </div>
        </div>
}
      </div>
    </div>
  );
}
