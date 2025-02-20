import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
export default function Tired() {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${styles.tired}`}>
      <div className={styles.card} onClick={() => navigate('/music')}>
        <div className={`${styles.title} ${styles.dreamy}`}>Dreamy Melodies</div>
        <img src="https://i.imgur.com/31kUGgu.png" alt="dreamy melodies" />
      </div>

      <div className={styles.card} onClick={() => navigate('/story')}>
        <div className={`${styles.title} ${styles.tales}`}>Nighttime Tales</div>
        <img src="https://i.imgur.com/fzdN4Zn.png" alt="nighttime tales" />
      </div>

      <div className={styles.card} onClick={() => navigate('/creativecalm')}>
        <div className={`${styles.title} ${styles.calm}`}>Creative Calm</div>
        <img src="https://i.imgur.com/VWG8e7f.png" alt="creative calm" />
      </div>
    </div>
  );
}
