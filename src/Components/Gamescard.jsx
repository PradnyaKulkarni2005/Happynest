import React from 'react'
import './gamescard.css'

export default function Gamescard({ card: { title, url, description,imgurl} }) {
  return (
    <div>
        
<div class="card">
<a href={url}>
  <div class="img">
   <img src={imgurl} alt="" />
  </div>
  </a>

  <div class="text">
    <p class="h3"> {title}</p>
    <p class="p">{description} </p>

      </div>
  </div>
</div>
      
    
  )
}
