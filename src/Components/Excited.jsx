import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'; // Import the external CSS file

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
    <div className={`${styles.commoncontainer} ${styles.excitedcontainer}`}>
      {/* First Image and Text */}
      <img 
        className={`${styles.image} ${styles.image1}` }
        src="https://i.imgur.com/ucCacMh.png" 
        alt="Cheerful Tunes"
        onClick={() => handleClick('/pop-1.mp3', '/tunes')} 
      />
      <div className={`${styles.backgroundBlock} ${styles.block1} ${styles.excitedblock1}`}></div>
      <div className={`${styles.text} ${styles.text1}`}>Cheerful Tunes for Happy Hearts!</div>

      {/* Second Image and Text */}
      <img 
        className={`${styles.image} ${styles.image2}` }
        src="https://i.imgur.com/5uaA9eL.png" 
        alt="DIY Adventures"
        onClick={() => handleClick('/pop-1.mp3', '/crafts')} 
      />
      <div className={`${styles.backgroundBlock} ${styles.block4} ${styles.excitedblock4}`}></div>
      <div className={`${styles.text} ${styles.text2}`}>Dive Into DIY Adventures!</div>

      {/* Third Image and Text */}
      <img 
        className={`${styles.image} ${styles.image3}` } 
        src="https://i.imgur.com/3Agpvsl.png" 
        alt="Game On"
        onClick={() => handleClick('/pop-1.mp3', '/excitedgames')} 
      />
      <div className={`${styles.backgroundBlock} ${styles.block2} ${styles.excitedblock2}`}></div>
      <div className={`${styles.text} ${styles.text3}`}>Game On!</div>

      {/* Fourth Image and Text */}
      <img 
        className={`${styles.image} ${styles.image4}` } 
        src="https://i.imgur.com/6wz6Vdl.png" 
        alt="Inner Artist"
        onClick={() => handleClick('/pop-1.mp3', '/drawing')} 
      />
      <div className={`${styles.backgroundBlock} ${styles.block3} ${styles.excitedblock3}`}></div>
      <div className={`${styles.text} ${styles.text4}`}>Explore Your Inner Artist</div>
    </div>
  );
}
