import React from "react";
import "./gamescard.css";

const GamesCard = ({ card }) => {
  return (
    <div className="gamecard">
      <div className="img">
        <a href={card.url} target="_blank" rel="noopener noreferrer">
          <img src={card.imgurl} alt={card.title} />
        </a>
      </div>
      <div className="text">
        <h3>{card.title}</h3>
      </div>
    </div>
  );
};

export default GamesCard;
