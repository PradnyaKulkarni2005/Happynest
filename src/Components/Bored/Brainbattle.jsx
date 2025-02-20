import React from 'react'
import games from '../../data/brainteasers.json'
import Gamescard from '../../Components/Gamescard'; // Example of a different location
import '../../Components/Excited/gamescss.css'


export default function Brainbattle() {
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
