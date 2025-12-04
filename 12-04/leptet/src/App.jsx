import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null); // ide mentjük az interval ID-t

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // ▶️ Start gomb
  const handleStart = () => {
    setIsRunning(true);
  };

  // ⏹️ Stop gomb
  const handleStop = () => {
    setIsRunning(false);
  };

  // 🔄 Reset gomb
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <>
      <h1>Számláló: {count}</h1>

      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
