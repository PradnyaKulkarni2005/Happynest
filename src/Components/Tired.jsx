import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
export default function Tired() {
  const navigate = useNavigate();
  return (
    <div style={{width: '100%', height: '100vh', position: 'relative', background: 'linear-gradient(180deg, #FFD6E0 0%, #A8E6CF 50%)'}}>
        <div >
  <img style={{width: 450, height: 281, left: 30, top: 201, position: 'absolute'}} src="https://i.imgur.com/31kUGgu.png" alt='dreamy melodies' onClick={() => navigate('/music')} />
  <div style={{width: 450, height: 93, left: 30, top: 108, position: 'absolute', background: '#072942', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div style={{width: 450, height: 93, left: 30, top: 542, position: 'absolute', background: '#D32053', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div style={{width: 450, height: 93, left: 530, top: 108, position: 'absolute', background: '#432818', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div style={{width: 290, height: 54, left: 100, top: 128, position: 'absolute', textAlign: 'center', color: '#CAF0F8', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Dreamy Melodies</div>
  <img style={{width: 450, height: 281, left: 530, top: 201, position: 'absolute'}} src="https://i.imgur.com/fzdN4Zn.png" onClick={() => navigate('/story')} />
  <div style={{width: 269, height: 57, left: 610, top: 130, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Nighttime Tales</div>
  <img style={{width: 450, height: 281, left: 30, top: 635, position: 'absolute'}} src="https://i.imgur.com/VWG8e7f.png" onClick={()=>{navigate('/creativecalm')}} />
  <div style={{width: 292, height: 54, left: 100, top: 569, position: 'absolute', textAlign: 'center', color: '#FFB3C1', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>Creative Calm</div>
</div>
    </div>
  )
}
