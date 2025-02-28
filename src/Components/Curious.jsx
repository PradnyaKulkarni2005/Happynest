import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styles from'./styles.module.css'

export default function Curious() {
   const navigate = useNavigate(); 
  
    const handleClick = (soundFile, route) => {
      const audio = new Audio(process.env.PUBLIC_URL + soundFile);
      audio.play(); // Play the sound
      setTimeout(() => {
        navigate(route); // Navigate to the route after the sound starts playing
      }, 300); // Delay navigation slightly to allow the sound to play
    };
  
  return (

<div className={`${styles.container} ${styles.curious}`}>
  
      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/riddle')}>
        <div className={`${styles.title} ${styles.mystery}`}>Mystery Mindbenders</div>
        <img src="https://i.imgur.com/wTmoO1A.png" alt="Mystery Mindbenders" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/global')}>
        <div className={`${styles.title} ${styles.global}`}>Exploring Global Treasures</div>
        <img src="https://i.imgur.com/WheG8UG.png" alt="Exploring Global Treasures" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3','/curiouscorner')}>
        <div className={`${styles.title} ${styles.curiouscorner}`}>Curious Corner</div>
        <img src="https://i.imgur.com/85h4waG.png" alt="Curious Corner"/>
      </div>
      <div className={styles.card} >
              
              <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5jcWt0ZWYxbWU3OWc3dXUyZ2d5dTR6aGFsOG9ycnFvcjB5ejRpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YPJpjUTMaWenwwDGs7/giphy.gif" />
            </div>
    </div>
   
    
  )
}
