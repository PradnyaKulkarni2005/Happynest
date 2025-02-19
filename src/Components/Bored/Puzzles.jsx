import React from 'react'
import games from '../../data/puzzlegames.json'
import Gamescard from '../../Components/Gamescard'; // Example of a different location
import '../../Components/gamescard.css'


export default function Puzzles() {
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
