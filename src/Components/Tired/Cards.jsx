import React from "react";
import { useNavigate } from "react-router-dom";
import "./cards_css.css";

export default function Cards() {
  const navigate = useNavigate();

  const handleClick = (language) => {
    navigate(`/songs/${language}`);
  };

  return (
    <div className="seconddiv">
      <div className="cards">
        <div className="card red" onClick={() => handleClick("sleepyenglish")}>
          <p className="tip">English</p>
        </div>
        <div className="card blue" onClick={() => handleClick("sleepymarathi")}>
          <p className="tip">Marathi</p>
        </div>
        <div className="card green" onClick={() => handleClick("sleepyhindi")}>
          <p className="tip">Hindi</p>
        </div>
      </div>
    </div>
  );
}
