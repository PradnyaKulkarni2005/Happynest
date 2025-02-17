import React from 'react';
import styles from '../styles.module.css'
export default function Yoga() {
  const data = [
    "https://www.youtube.com/embed/cyvuaL_2avY",
    "https://www.youtube.com/embed/FB5-7tIiX-I",
    "https://www.youtube.com/embed/IIbBI-BT9c4",
    "https://www.youtube.com/embed/FKU6QwT8psY",
    "https://www.youtube.com/embed/H9Hnisaqlns",
    "https://www.youtube.com/embed/UEuFi9PxKuo",
    "https://www.youtube.com/embed/DJt6ORwxKmE",
    "https://www.youtube.com/embed/oYI0TPJOuGk"
  ];

  return (
    <div className ={`${styles.scaredcontainer} `} style={{padding:'5%'}}>
      <div className="main">
        <div className="crafts">
          {data.map((url, index) => {
            return (
              <div key={index}>
                <iframe
                  width="560"
                  height="315"
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
