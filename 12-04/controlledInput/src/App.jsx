import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const taroltErtek = localStorage.getItem('nev');
    if (taroltErtek !== null) {
      setInput(taroltErtek);
    }
  }, []);

  useEffect(() => {
    if (input && input.length > 0) {
      localStorage.setItem('nev', input);
    }
  }, [input]);

  return (
    <>
    <h1>Üdvözöllek, {input.length > 0 ? input : "vendég"}!</h1>
      <form>
        <label htmlFor="nev">Név:</label>
        <input
          type="text"
          id="nev"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </>
  )
}

export default App;
