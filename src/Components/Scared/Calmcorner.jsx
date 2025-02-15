import React from 'react'
import bravery from '../../data/braverystories.json'
export default function Calmcorner() {
    
  return (
    <div>
      <div className='main'>
            <div className='crafts'>
                {bravery.map((bravery, index) => {
                    return (
                        <div key={index}>
                            <iframe 
                                width="560" 
                                height="315" 
                                src={bravery.url} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    )
                })}
            </div>
        </div>

        
      
    </div>
  )
}
