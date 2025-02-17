import React from 'react';
import './cardcss.css';
import Card from './Card';
import data from '../../data/bravemsg.json';

export default function Braverymsg() {
  return (
    <div className="braverycontainer">
      {data.map((item, index) => (
        <Card key={index} card={item} />
      ))}
    </div>
  );
}
