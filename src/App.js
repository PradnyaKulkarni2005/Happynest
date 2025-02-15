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
  import Games from './Components/Excited/Games.jsx';
  import Crafts from './Components/Excited/Crafts.jsx';
import DrawingPad from './Components/Excited/DrawingPad.jsx';
import Cards from './Components/Tired/Cards.jsx';
  
  function App() {
    // const [currentComponent, setCurrentComponent] = useState('home');
    return (
      // State to manage which component to display
      
      <div className="App">
        {/* Conditional Rendering Based on State */}
        {/* {currentComponent === 'home' && (
          <Home onImageClick={(component) => setCurrentComponent(component)} />
        )}
        {currentComponent === 'excited' && <Excited />}
        {currentComponent === 'bored' && <Bored />}
        {currentComponent === 'scared' && <Scared />}
        {currentComponent === 'tired' && <Tired />}
        {currentComponent === 'curious' && <Curious />} */}
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
                  <Route path='/videos' element={<Videos/>}/>
                  <Route path='/excitedgames' element={<Games/>}/>
                  <Route path='/crafts' element={<Crafts/>}/>
                  <Route path='/drawing' element={<DrawingPad/>}/>
                  

  
              </Routes>
          </Router>
          
  
      </div>
    );
  }
  
  export default App;
  