import React from 'react';
import '../../Components/Scared/cardcss.css';
import Card from '../../Components/Scared/Card';
import data from '../../data/didyouknow.json';

export default function Didyouknow() {
  return (
    <div className="braverycontainer">
      {data.map((item, index) => (
        <Card key={index} card={item} />
      ))}
    </div>
  );
}
