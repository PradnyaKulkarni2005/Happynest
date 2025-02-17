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
    <div className={`${styles.commoncontainer} ${styles.curiouscontainer}`}>
      <div>
  <img className={`${styles.image} ${styles.image1}`}src="https://i.imgur.com/wTmoO1A.png" />
  <div style={{ background: '#001845', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} className={`${styles.backgroundBlock} ${styles.block1}`} />
  <div style={{width: 470, height: 93, left: 265, top: 541, position: 'absolute', background: '#142E14', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}  />
  <div style={{background: '#5B3D27', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} className={`${styles.backgroundBlock} ${styles.block4}`} />
  <div style={{ color: '#D8E2DC'}} className={`${styles.text} ${styles.text1}`}>Mystery Mindbenders</div>
  <img className={`${styles.image} ${styles.image2}`} src="https://i.imgur.com/WheG8UG.png" onClick={() => handleClick('/pop-1.mp3', '/global')}  />
  <div style={{ color: '#FEC89A'}} className={`${styles.text} ${styles.text2}`}>Exploring Global Treasures</div>
  <div style={{width: 289, height: 42, left: 345, top: 570, position: 'absolute', textAlign: 'center', color: '#B2FF9E', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Curious Corner</div>
  <img style={{width: 470, height: 280, left: 265, top: 631, position: 'absolute'}} src="https://i.imgur.com/85h4waG.png" />
</div>
    </div>
  )
}
