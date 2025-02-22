import React from 'react'
import './cardcss.css'
export default function Card({card:{title,imgurl}}) {
  return (
    <div >
      <div className="main">
       <div className="card">
  <img src={imgurl} className='cardimg' alt="" />
  <div className="card__content">
    <p className="card__title">{title}</p>
    </div>
  </div>
</div> 

      
    </div>
  )
}
