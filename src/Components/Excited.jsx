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
    <div className={`${styles.container} ${styles.excited}`}>
          <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/tunes')}>
            <div className={`${styles.title} ${styles.tunes}`}> Cheerful Tunes for Happy Hearts!</div>
            <img src="https://i.imgur.com/ucCacMh.png" alt="tunes" />
          </div>
    
          <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/crafts')} >
            <div className={`${styles.title} ${styles.diy}`}>Dive Into DIY Adventures!</div>
            <img src="https://i.imgur.com/5uaA9eL.png" alt="diy" />
          </div>
    
          <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/excitedgames')}>
            <div className={`${styles.title} ${styles.games}`}>Game On!</div>
            <img src="https://i.imgur.com/3Agpvsl.png" alt="Game On! " />
          </div>
          <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/drawing')}>
            <div className={`${styles.title} ${styles.artist}`}>Explore Your Inner Artist</div>
            <img src="https://i.imgur.com/6wz6Vdl.png" alt="Explore Your Inner Artist" />
          </div>
        </div>
  );
}
