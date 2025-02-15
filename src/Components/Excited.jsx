import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Excited.css'; // Import the external CSS file

export default function Excited() {
  const navigate = useNavigate();

  const handleClick = (soundFile, route) => {
    const audio = new Audio(process.env.PUBLIC_URL + soundFile);
    audio.play(); // Play the sound
    setTimeout(() => {
      navigate(route); // Navigate to the route after the sound starts playing
    }, 300); // Delay navigation slightly to allow the sound to play
  };

  return (
    <div className="container">
      {/* First Image and Text */}
      <img 
        className="image image-1" 
        src="https://i.imgur.com/ucCacMh.png" 
        alt="Cheerful Tunes"
        onClick={() => handleClick('/pop-1.mp3', '/tunes')} 
      />
      <div className="background-block block-1"></div>
      <div className="text text-1">Cheerful Tunes for Happy Hearts!</div>

      {/* Second Image and Text */}
      <img 
        className="image image-2" 
        src="https://i.imgur.com/5uaA9eL.png" 
        alt="DIY Adventures"
        onClick={() => handleClick('/pop-1.mp3', '/crafts')} 
      />
      <div className="background-block block-4"></div>
      <div className="text text-2">Dive Into DIY Adventures!</div>

      {/* Third Image and Text */}
      <img 
        className="image image-3" 
        src="https://i.imgur.com/3Agpvsl.png" 
        alt="Game On"
        onClick={() => handleClick('/pop-1.mp3', '/excitedgames')} 
      />
      <div className="background-block block-2"></div>
      <div className="text text-3">Game On!</div>

      {/* Fourth Image and Text */}
      <img 
        className="image image-4" 
        src="https://i.imgur.com/6wz6Vdl.png" 
        alt="Inner Artist"
        onClick={() => handleClick('/pop-1.mp3', '/drawing')} 
      />
      <div className="background-block block-3"></div>
      <div className="text text-4">Explore Your Inner Artist</div>
    </div>
  );
}
