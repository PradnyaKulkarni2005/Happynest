import React from 'react'
import games from '../../data/creativecalm.json'
import Gamescard from '../../Components/Gamescard'; // Example of a different location
import '../Excited/gamescss.css'


export default function CreativeCalm() {
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
