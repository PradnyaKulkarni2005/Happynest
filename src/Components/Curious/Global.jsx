import React, { useState } from "react";
import "./global.css";
import audioFile from "../../assets/catmoving.mp3"; // Correct import

const Global = () => {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });
  const [audioEnabled, setAudioEnabled] = useState(false); 
  const [catMoveAudio] = useState(new Audio(audioFile)); // Initialize once

  const countries = {
    India: { x: 676, y: 230, fact: "India: Home to the world’s largest democracy." },
    USA: { x: 200, y: 150, fact: "The USA has 50 states." },
    Australia: { x: 810, y: 390, fact: "Australia is home to kangaroos." },
    Brazil: { x: 340, y: 350, fact: "Brazil is famous for its Amazon rainforest." },
    Japan: { x: 850, y: 150, fact: "Japan: Known for having the world’s oldest monarchy" },
    Canada: { x: 220, y: 80, fact: "Canada: Has more lakes than the rest of the world combined." },
    Russia: { x: 720, y: 60, fact: "Russia: Spans 11 time zones, the most of any country." },
    China: { x: 750, y: 190, fact: "The Great Wall of China is the longest man-made structure in the world." },
  };

  const handleEnableAudio = () => {
    setAudioEnabled(true);
  };

  const handleMouseEnter = (country) => {
    setCatPosition({ x: countries[country].x, y: countries[country].y });

    if (audioEnabled) {
      catMoveAudio.currentTime = 0; // Restart audio
      catMoveAudio.play().catch((err) => console.error("Audio play error:", err));
    }

    setTooltip({
      visible: true,
      text: countries[country].fact,
      x: countries[country].x,
      y: countries[country].y - 40, 
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: "", x: 0, y: 0 });
  };

  return (
    <div className="map-container">
      {!audioEnabled && (
        <button className="enable-audio" onClick={handleEnableAudio}>
          Enable Sound
        </button>
      )}

      <img
        src="https://i.imgur.com/zvH0AEk.jpeg"
        alt="World Map"
        className="map"
      />

      <div
        className="cat"
        style={{
          left: `${catPosition.x}px`,
          top: `${catPosition.y}px`,
        }}
      ></div>

      {Object.keys(countries).map((country) => (
        <div
          key={country}
          className="country"
          style={{
            left: `${countries[country].x}px`,
            top: `${countries[country].y}px`,
          }}
          onMouseEnter={() => handleMouseEnter(country)}
          onMouseLeave={handleMouseLeave}
        ></div>
      ))}

      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Global;
