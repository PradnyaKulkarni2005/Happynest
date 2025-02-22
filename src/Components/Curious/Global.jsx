import React, { useState, useEffect } from "react";
import "./global.css";
import audioFile from "../../assets/catmoving.mp3";

const Global = () => {
  const [catPosition, setCatPosition] = useState({ x: "0%", y: "0%" });
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [catMoveAudio] = useState(new Audio(audioFile));

  const countries = {
    India: { x: 66, y: 47, fact: "India: Home to the world’s largest democracy." },
    USA: { x: 20, y: 30, fact: "The USA has 50 states." },
    Australia: { x: 80, y: 74, fact: "Australia is home to kangaroos." },
    Brazil: { x: 35, y: 68, fact: "Brazil is famous for its Amazon rainforest." },
    Japan: { x: 83, y: 30, fact: "Japan: Known for having the world’s oldest monarchy." },
    Canada: { x: 21, y: 18, fact: "Canada: Has more lakes than the rest of the world combined." },
    Russia: { x: 70, y: 16, fact: "Russia: Spans 11 time zones, the most of any country." },
    China: { x: 74, y: 37, fact: "The Great Wall of China is the longest man-made structure in the world." },
  };

  const handleEnableAudio = () => setAudioEnabled(true);

  const handleMouseEnter = (country) => {
    setCatPosition({ x: `${countries[country].x}%`, y: `${countries[country].y}%` });
    if (audioEnabled) {
      catMoveAudio.currentTime = 0;
      catMoveAudio.play().catch((err) => console.error("Audio play error:", err));
    }
    setTooltip({
      visible: true,
      text: countries[country].fact,
      x: countries[country].x,
      y: countries[country].y,
    });
  };

  const handleMouseLeave = () => setTooltip({ visible: false, text: "", x: 0, y: 0 });

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
        style={{ left: catPosition.x, top: catPosition.y }}
      ></div>

      {Object.keys(countries).map((country) => (
        <div
          key={country}
          className="country"
          style={{
            left: `${countries[country].x}%`,
            top: `${countries[country].y}%`,
          }}
          onMouseEnter={() => handleMouseEnter(country)}
          onMouseLeave={handleMouseLeave}
        ></div>
      ))}

      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: `${tooltip.x > 80 ? tooltip.x - 10 : tooltip.x + 2}%`,
            top: `${tooltip.y > 80 ? tooltip.y - 10 : tooltip.y + 2}%`,
            transform: tooltip.x > 80 ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Global;
