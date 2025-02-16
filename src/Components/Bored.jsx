import React from 'react'
import styles from './styles.module.css'
export default function Bored() {
  return (
    <div className={`${styles.commoncontainer} ${styles.boredcontainer}`}>
      <div>
  <img className={`${styles.image} ${styles.image1}`}src="https://i.imgur.com/CgKKmRw.png" />
  <div className={`${styles.backgroundBlock} ${styles.block1} ${styles.boredblock1}`} />
  <div className={`${styles.backgroundBlock} ${styles.block2} ${styles.boredblock3}`} />
  <div className={`${styles.backgroundBlock} ${styles.block3} ${styles.boredblock4}`} />
  <div className={`${styles.backgroundBlock} ${styles.block4} ${styles.boredblock2}`} />
  <div className={`${styles.text} ${styles.text1}`} style={{color:'#FFC77D'}}>Puzzle Paradize</div>
  {/* <div style={{width: 309, height: 60, left: 291, top: 116, position: 'absolute', textAlign: 'center', color: '#FFC77D', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Puzzle Paradise</div> */}
  <img className={`${styles.image} ${styles.image2}`} src="https://i.imgur.com/Z8JmKje.png" />
  <div className={`${styles.text} ${styles.text2}`} style={{ color: '#DAE3E5',fontWeight: '400'}}>Brain Battle</div>
  <img className={`${styles.image} ${styles.image3}`} src="https://i.imgur.com/0WfNUFK.png" />
  <div style={{ color: '#161834'}} className={`${styles.text} ${styles.text3}`}>Explore Fun Facts</div>
  <img className={`${styles.image} ${styles.image4}`} src="https://i.imgur.com/n6jWcgr.png" />
  <div style={{ color: '#38090B'}}  className={`${styles.text} ${styles.text4}`} >Hit the button and let the fun find you !!</div>
</div>
    </div>
  )
}
