import { use } from 'react';
import './App.css'
import { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect futott");
    // eseménykezelő függvények létrehozása
    const handleUpClick = () => setCount((count) => count + 1);
    const handleDownClick = () => setCount((count) => count - 1);
    // eseménykezelők hozzárendelése a gombokhoz
    const upButton = document.querySelector('.up');
    const downButton = document.querySelector('.down');
    upButton.addEventListener('click', handleUpClick);
    downButton.addEventListener('click', handleDownClick);
    return () => {
      upButton.removeEventListener('click', handleUpClick);
      downButton.removeEventListener('click', handleDownClick);
    };
  }, []);

  return (
    <>
      <h1>Egyszerű számláló</h1>
      <div id="kezeloPanel">
        <button className="up">+</button>
        <p>{count}</p>
        <button className="down">-</button>
      </div>
    </>
  )
}
export default App
