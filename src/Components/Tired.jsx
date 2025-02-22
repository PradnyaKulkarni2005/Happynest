import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
export default function Tired() {
  const navigate = useNavigate();
  const handleClick = (soundFile, route) => {
    const audio = new Audio(process.env.PUBLIC_URL + soundFile);
    audio.play(); // Play the sound
    setTimeout(() => {
      navigate(route); // Navigate to the route after the sound starts playing
    }, 300); // Delay navigation slightly to allow the sound to play
  };

  return (
    <div className={`${styles.container} ${styles.tired}`}>
      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/music')}>
        <div className={`${styles.title} ${styles.dreamy}`}>Dreamy Melodies</div>
        <img src="https://i.imgur.com/31kUGgu.png" alt="dreamy melodies" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/story')}>
        <div className={`${styles.title} ${styles.tales}`}>Nighttime Tales</div>
        <img src="https://i.imgur.com/fzdN4Zn.png" alt="nighttime tales" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3','/creativecalm')}>
        <div className={`${styles.title} ${styles.calm}`}>Creative Calm</div>
        <img src="https://i.imgur.com/VWG8e7f.png" alt="creative calm" />
      </div>
      <div className={styles.card} >
        
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBxd2t5ajg2NThneXR0OWN0am9xN2dnN2cydG14b2JiMnB5aXZlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nO8ta7RvfXD8Y1CFyr/giphy.gif" alt="creative calm" />
      </div>
    </div>
  );
}
