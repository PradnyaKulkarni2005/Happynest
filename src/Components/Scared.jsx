import React from 'react'
import styles from './styles.module.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
    <div className={`${styles.commoncontainer} ${styles.scaredcontainer}`}>
        <div >
  <img className={`${styles.image} ${styles.image1}` } src="https://i.imgur.com/km48lAw.png" onClick={() => handleClick('/pop-1.mp3', '/braverymsg')}/>
  <div style={{ background: '#BC3908', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} className={`${styles.backgroundBlock} ${styles.block1}`} />
  <div style={{ background: '#6E1423', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} className={`${styles.backgroundBlock} ${styles.block4}`} />
  <div style={{width: 470, height: 93, left: 265, top: 541, position: 'absolute', background: '#895B1E', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div style={{ color: '#FEC89A'}} className={`${styles.text} ${styles.text1}`}>Bravery Beats</div>
  <img style={{width: 470, height: 280, left: 265, top: 634, position: 'absolute'}} src="https://i.imgur.com/jxFC511.png" onClick={() => handleClick('/pop-1.mp3', '/yoga')} />
  <img className={`${styles.image} ${styles.image2}`} src="https://i.imgur.com/KDFQL4D.png" onClick={() => handleClick('/pop-1.mp3', '/calmcorner')} />
  <div style={{ textAlign: 'center', color: '#F9DCC4'}} className={`${styles.text} ${styles.text2}`}>Calm Corner</div>
  <div style={{left: 365, top: 568, position: 'absolute', textAlign: 'center', color: '#D3F8E2', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Braveheart Boosters</div>
</div>
    </div>
  )
}
