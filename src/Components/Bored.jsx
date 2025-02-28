import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
export default function Bored() {
  const navigate = useNavigate(); 
  
    const handleClick = (soundFile, route) => {
      const audio = new Audio(process.env.PUBLIC_URL + soundFile);
      audio.play(); // Play the sound
      setTimeout(() => {
        navigate(route); // Navigate to the route after the sound starts playing
      }, 300); // Delay navigation slightly to allow the sound to play
    };
  return (
    <div className={`${styles.container} ${styles.bored}`}>
<div className={styles.card}>
        <div className={`${styles.title} ${styles.puzzle}`}>Puzzle Paradize</div>
        <img src="https://i.imgur.com/CgKKmRw.png" alt="puzzle paradize" onClick={() => handleClick('/pop-1.mp3', '/puzzles')} />
      </div>

      <div className={styles.card} >
        <div className={`${styles.title} ${styles.battle}`}>Brain Battle</div>
        <img src="https://i.imgur.com/Z8JmKje.png" alt="brainbattle" onClick={() => handleClick('/pop-1.mp3', '/brainbattle')}/>
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/didyouknow')}>
        <div className={`${styles.title} ${styles.facts}`}>Explore Fun Facts</div>
        <img src="https://i.imgur.com/0WfNUFK.png" alt="fun facts"  />
      </div>
      <div className={styles.card} >
        
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3JocGZkZmdvY2k1bTFsdWR4Ym1mb3hxdXZ6bWIyMDdjN3draGVmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornjXIs8DP8BEovok/giphy.gif" alt="creative calm"  />
      </div>
    </div>
    
  )
}
