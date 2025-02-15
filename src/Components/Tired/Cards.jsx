import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cards_css.css';

export default function Cards({ section, category }) {
  const navigate = useNavigate();

  const handleClick = (language) => {
    // Navigate to the Videos component with query parameters
    navigate(`/videos?section=${section}&language=${language}&category=${category}`);
  };

  return (
    <div className="seconddiv">
      <div className="cards">
        <div className="card red" onClick={() => handleClick('English')}>
          <p className="tip">English</p>
        </div>
        <div className="card blue" onClick={() => handleClick('Marathi')}>
          <p className="tip">Marathi</p>
        </div>
        <div className="card green" onClick={() => handleClick('Hindi')}>
          <p className="tip">Hindi</p>
        </div>
      </div>
    </div>
  );
}
