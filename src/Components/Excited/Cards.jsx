import React from "react";
import { useNavigate } from "react-router-dom";
import "../Tired/cards_css.css";

export default function Cards() {
  const navigate = useNavigate();

  const handleClick = (language) => {
    navigate(`/songs/${language}`);
  };

  return (
    <div className="seconddiv">
      <div className="cards">
        <div className="card red" onClick={() => handleClick("excitedenglish")}>
          <p className="tip">English</p>
        </div>
        <div className="card blue" onClick={() => handleClick("excitedmarathi")}>
          <p className="tip">Marathi</p>
        </div>
        <div className="card green" onClick={() => handleClick("excitedhindi")}>
          <p className="tip">Hindi</p>
        </div>
      </div>
    </div>
  );
}
