import React from "react";
import { useNavigate } from "react-router-dom";
import "./homecss.css";

const Home = () => {
  const navigate = useNavigate();
  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.imgur.com/RkhdXr3.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={backgroundStyle}>
      

      {/* Title */}
      <div className="title">HappyNEST</div>

      {/* Heading */}
      <div className="heading">What’s Your Mood Today?</div>

      {/* Mood Images and Labels */}
      <div className="mood-container">
        <div className="mood">
          <img
            src="https://i.imgur.com/gmFKASW.png"
            alt="Excited"
            className="mood-image"
            onClick={() => navigate("/excited")}
          />
          <div className="mood-label "><h1>Excited</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/HtwwT6a.png"
            alt="Bored"
            className="mood-image"
            onClick={() => navigate("/bored")}
          />
          <div className="mood-label"><h1>Bored</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/xIwmvua.png"
            alt="Scared"
            className="mood-image"
            onClick={() => navigate("/scared")}
          />
          <div className="mood-label"><h1>Scared</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/WksI2H4.png"
            alt="Tired"
            className="mood-image"
            onClick={() => navigate("/tired")}
          />
          <div className="mood-label"><h1>Tired</h1></div>
        </div>

        <div className="mood">
          <img
            src="https://i.imgur.com/2CyqVQU.png"
            alt="Curious"
            className="mood-image"
            onClick={() => navigate("/curious")}
          />
          <div className="mood-label"><h1>Curious</h1></div>
        </div>
      </div>

      {/* Radial Gradient Sections */}
      <div className="radial-gradient radial-gradient-1">
        <div className="gradient-label">Story Land Adventures!</div>
      </div>

      <div className="radial-gradient radial-gradient-2">
        <div className="gradient-label">Tune Time!</div>
      </div>

      {/* Bottom Labels */}
      <div className="bottom-label bottom-label-game-on">Game On!</div>
      <div className="bottom-label bottom-label-did-you-know">Did You Know?</div>
    </div>
  );
};

export default Home;
