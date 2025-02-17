import React from 'react'
import crafts from '../../data/crafts.json'
import styles from '../styles.module.css'

export default function Crafts() {
  return (
    <div>
        <div className ={`${styles.excitedcontainer} `} style={{padding:'5%'}}>
            <div className='crafts'>
                {crafts.map((craft, index) => {
                    return (
                        <div key={index}>
                            <iframe 
                                width="560" 
                                height="315" 
                                src={craft.url} 
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
