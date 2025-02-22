import React, { useRef, useState } from 'react';
import './DrawingPad.css'; // Optional: For styling the canvas

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const initCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 100;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx;
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setLastPos({ x, y });
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.stroke();
    setLastPos({ x, y });
  };

  const handleMouseUp = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const changeColor = (newColor) => setColor(newColor);

  const changeBrushSize = (size) => setBrushSize(size);

  // ⭐ Save canvas as an image
  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png"); // Convert canvas to PNG
    const link = document.createElement("a");
    link.href = image;
    link.download = "drawing.png"; // File name
    link.click(); // Trigger download
  };

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

        <div className='brush-size'>
          <button className="brush" onClick={() => changeBrushSize(5)}>Small</button>
          <button className="brush" onClick={() => changeBrushSize(10)}>Medium</button>
          <button className="brush" onClick={() => changeBrushSize(20)}>Large</button>
        </div>

        <button onClick={clearCanvas} className="clear">Clear</button>
        <button onClick={saveCanvas} className="button">Save</button> {/* 💾 Save button added */}
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
