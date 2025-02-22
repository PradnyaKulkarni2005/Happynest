import React from 'react'
import games from '../../data/excitedgames.json'
import Gamescard from '../../Components/Gamescard';
import './gamescss.css'


export default function Games() {
  return (
    <div>
      <div className='main'>
        <div className='games'>
        {games.map((card, id) => {
          return <Gamescard key={id} card={card} />; 
        })}
      </div>
      </div>
        
    </div>
  )
}
