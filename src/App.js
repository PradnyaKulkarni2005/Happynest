  // State to track the visible component
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from'./Components/Home.jsx'
  import Excited from './Components/Excited.jsx';
  import Bored from './Components/Bored.jsx';
  import Scared from './Components/Scared.jsx';
  import './App.css';
  import Tired from './Components/Tired.jsx';
  import Curious from './Components/Curious.jsx';
  import Music from './Components/Tired/Music/Music.jsx';
  import Story from './Components/Tired/Story/Story.jsx';
  import Videos from './Components/Tired/Story/Videos.jsx';
  import CreativeCalm from './Components/Tired/CreativeCalm';
  import Games from './Components/Excited/Games.jsx';
  import Crafts from './Components/Excited/Crafts.jsx';
import DrawingPad from './Components/Excited/DrawingPad.jsx';
import Cards from './Components/Tired/Cards.jsx';
import Global from './Components/Curious/Global'
import Calmcorner from './Components/Scared/Calmcorner'
import Braverymsg from './Components/Scared/Braverymsg.jsx'
import Yoga from './Components/Scared/Yoga.jsx';
import Puzzles from './Components/Bored/Puzzles.jsx';
import Didyouknow from './Components/Bored/Didyouknow.jsx';
import Brainbattle from './Components/Bored/Brainbattle.jsx';
import Riddlelist from './Components/Curious/Riddlelist.jsx';
import SongList from './Components/SongList.jsx';
import Tunes from './Components/Excited/Tunes.jsx';
import Curiouscorner from './Components/Curious/Curiouscorner.jsx';
  function App() {
    return (
       <div className="App">
             <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/excited" element={<Excited/>} />
                  <Route path="/bored" element={<Bored/>} />
                  <Route path="/scared" element={<Scared/>} />
                  <Route path="/tired" element={<Tired/>} />
                  <Route path="/curious" element={<Curious/>} />
                  <Route path="/music" element={<Music/>} />
                  <Route path="/story" element={<Story/>}/>
                  <Route path="/videos" element={<Videos />} />
                  <Route path='/excitedgames' element={<Games/>}/>
                  <Route path='/crafts' element={<Crafts/>}/>
                  <Route path='/drawing' element={<DrawingPad/>}/>
                  <Route path='/global' element={<Global/>}/>
                  <Route path='/calmcorner' element={<Calmcorner/>}/>
                  <Route path='/braverymsg' element={<Braverymsg/>}/>
                  <Route path='/yoga' element={<Yoga/>}/>
                  <Route path='/creativecalm' element={<CreativeCalm/>}/>
                  <Route path='/puzzles' element={<Puzzles/>}/>
                  <Route path='/didyouknow' element={<Didyouknow/>}/>
                  <Route path='/brainbattle' element={<Brainbattle/>}/>
                  <Route path='/riddle' element={<Riddlelist/>}/>
                  <Route path="/" element={<Cards />} />
                  <Route path='/tunes' element={<Tunes/>}/>

        <Route path="/songs/:language" element={<SongList />} />
        <Route path='/curiouscorner' element={<Curiouscorner/>}/>
              </Routes>
          </Router>
      </div>
    );
  }
  export default App;
  