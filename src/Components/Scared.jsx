import React from 'react'
import styles from './styles.module.css';
import { BrowserRouter as  useNavigate } from 'react-router-dom';
export default function Scared() {
  const navigate = useNavigate(); 
  
    const handleClick = (soundFile, route) => {
      const audio = new Audio(process.env.PUBLIC_URL + soundFile);
      audio.play(); // Play the sound
      setTimeout(() => {
        navigate(route); // Navigate to the route after the sound starts playing
      }, 300); // Delay navigation slightly to allow the sound to play
    };
  return (
<div className={`${styles.container} ${styles.scared}`}>
      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/braverymsg')}>
        <div className={`${styles.title} ${styles.beats}`}>Bravery Beats</div>
        <img src="https://i.imgur.com/km48lAw.png" alt="Bravery Beats" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/calmcorner')}>
        <div className={`${styles.title} ${styles.calm}`}>Calm Corner</div>
        <img src="https://i.imgur.com/KDFQL4D.png" alt="calm" />
      </div>

      <div className={styles.card} onClick={() => handleClick('/pop-1.mp3', '/yoga')}>
        <div className={`${styles.title} ${styles.boosters}`}>Braveheart Boosters</div>
        <img src="https://i.imgur.com/jxFC511.png" alt="Braveheart Boosters" />
      </div>
      <div className={styles.card}>
        
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZ5YWVmeTE1NWlkcGhkcmRhZXJ0bGhlcnpib2swOHJieHdndHRpMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JBOKvxKzNHRfO/giphy.gif" alt="Braveheart Boosters" />
      </div>
      

    </div>
  )
}
