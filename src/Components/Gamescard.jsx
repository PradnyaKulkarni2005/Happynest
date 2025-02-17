import React from "react";
import "./gamescard.css";

const GamesCard = ({ card }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={card.imgurl} alt={card.title} />
      </div>
      <div className="text">
        <h3>{card.title}</h3>
      </div>
    </div>
  );
};

export default GamesCard;
