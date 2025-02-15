import React, { useRef, useState } from 'react';
import './DrawingPad.css'; // Optional: For styling the canvas

const DrawingPad = () => {
  // Reference to the canvas DOM element
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  
  // State to store the current color and brush size
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);

  // To keep track of the drawing state (is drawing or not)
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  // Initialize canvas when component mounts
  const initCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 20; // Resize to window width
    canvas.height = window.innerHeight - 100; // Resize to window height (leaving space for buttons)
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;
  };

  // Handle starting to draw
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setLastPos({ x, y });
  };

  // Handle drawing
  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const ctx = ctxRef.current;

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y); // Move to the previous position
    ctx.lineTo(x, y); // Draw a line to the current position
    ctx.strokeStyle = color; // Set stroke color
    ctx.lineWidth = brushSize; // Set brush size
    ctx.stroke();

    setLastPos({ x, y }); // Update last position
  };

  // Stop drawing
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Change color
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  // Change brush size
  const changeBrushSize = (size) => {
    setBrushSize(size);
  };

  // Initialize canvas when the component mounts
  React.useEffect(() => {
    initCanvas();
  }, []);

  return (
    <div className="drawing-pad">
      <div className="controls">
        <div className="color-picker">
          <button onClick={() => changeColor("#000000")} style={{ backgroundColor: "#000000" }}></button>
          <button onClick={() => changeColor("#FF0000")} style={{ backgroundColor: "#FF0000" }}></button>
          <button onClick={() => changeColor("#00FF00")} style={{ backgroundColor: "#00FF00" }}></button>
          <button onClick={() => changeColor("#0000FF")} style={{ backgroundColor: "#0000FF" }}></button>
          <button onClick={() => changeColor("#FFFF00")} style={{ backgroundColor: "#FFFF00" }}></button>
        </div>

        <div className="brush-size">
          <button onClick={() => changeBrushSize(5)}>Small</button>
          <button onClick={() => changeBrushSize(10)}>Medium</button>
          <button onClick={() => changeBrushSize(20)}>Large</button>
        </div>

        <button onClick={clearCanvas} className="clear-button">Clear</button>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      />
    </div>
  );
};

export default DrawingPad;
