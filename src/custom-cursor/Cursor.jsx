// CustomCursor.js
import React, { useState, useEffect } from 'react';
import './cursor.css'; // Import your CSS for styling

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <div className={`cusor-dot ${isVisible ? 'visible' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <div className={`cursor-outline ${isVisible ? 'visible' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </>
  );
};

export default CustomCursor;
