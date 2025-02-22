import React from 'react';
import styles from '../styles.module.css';
import scienceNatureImg from '../../assets/sciencenature.gif';
import solarImg from '../../assets/solarsystem.gif';

export default function Curiouscorner() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={` ${styles.curious}`}>
        
      <div className={styles.curiouscard}>
        <div className={styles.card} onClick={() => handleRedirect('https://www.sciencekids.co.nz/nature.html')}>
          <div className={`${styles.title} ${styles.mystery}`}>Science and Nature</div>
          <div className={styles.imgWrapper}>
            <img src={scienceNatureImg} className={styles.gifi} alt="Science and Nature" />
          </div>
        </div>

        <div className={styles.card} onClick={() => handleRedirect('https://www.ouruniverseforkids.com/')}>
          <div className={`${styles.title} ${styles.global}`}>Space & The Universe</div>
          <div className={styles.imgWrapper}>
            <img src={solarImg} className={styles.gifi} alt="Space & The Universe" />
          </div>
        </div>

        <div className={styles.card} onClick={() => handleRedirect('https://www.natgeokids.com/ie/category/discover/animals/')}>
          <div className={`${styles.title} ${styles.curiouscorner}`}>Animals and Wildlife</div>
          <div className={styles.imgWrapper}>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NqZGh1cW9zc2F6aDg4Z2NrNzV3azJ2czJxZHpqc3hwNTgwZ2VpOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQG9OyPMvjbjVI8oii/giphy.gif"
              alt="Animals and Wildlife"
              className={styles.gifi}
            />
          </div>
        </div>

        <div className={styles.card} onClick={() => handleRedirect('https://kids.britannica.com/kids/article/Technology-and-Invention/353296')}>
          <div className={`${styles.title} ${styles.tales}`}>Technology & Inventions</div>
          <div className={styles.imgWrapper}>
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRyaWRucDV5aHJ5aHBlNDN2dGdsczJpdTRpY3dsMndoaG01cWN1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRGoqbUQvk8nwTC/giphy.gif"
              className={styles.gifi}
              alt="Technology & Inventions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
