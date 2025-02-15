import React from 'react';
import './Facts.css'; // Importing the CSS file

export default function Facts() {
  return (
    <div className="facts-container">
      <img
        className="facts-background"
        src="https://i.imgur.com/OEfz0TD.png"
        alt="background"
      />
      <div className="fact" style={{ top: '42px' }}>
        The Eiffel Tower can grow up to about 6 inches taller in the summer. That’s because the heat makes the iron expand.
      </div>
      <div className="fact" style={{ top: '149px' }}>
        Your heart beats about 115,000 times every day.
      </div>
      <div className="fact" style={{ top: '223px', color: '#FA6947' }}>
        Starfish have no brains, but they can regrow their arms if they lose one. ⭐
      </div>
      <div className="fact" style={{ top: '308px', color: '#A6546A' }}>
        Octopuses have three hearts, and their blood is blue! 🐙
      </div>
      <div className="fact" style={{ top: '383px', color: '#AE2012' }}>
        There are more stars in the universe than grains of sand on Earth. 🌟
      </div>
      <div className="fact" style={{ top: '454px', color: '#114F4F' }}>
        Your tongue is the strongest muscle in your body relative to its size. 😛
      </div>
      <div className="fact" style={{ top: '540px', color: '#7D5837' }}>
        Apples float in water because they are 25% air. 🍎
      </div>
      <div className="fact" style={{ top: '606px', color: '#288355' }}>
        A day on Venus is longer than a year on Venus! 🪐
      </div>
      <div className="fact" style={{ top: '668px', color: '#E25A88' }}>
        You blink around 20,000 times a day without even realizing it. 👀
      </div>
      <div className="fact" style={{ top: '801px', color: '#355070' }}>
        If you could drive a car to the Moon, it would take about a month to get there! 🚀
      </div>
    </div>
  );
}
