import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  let backendUrl = "https://randomuser.me/api/?results=10";

  useEffect(async () => {
    try {
      let results = await axios.get(backendUrl);
      console.log(results.data.results);
      setUsers(results.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);


  return (
    <>
      <h1>Felhasználók listája</h1>

    </>
  )
}

export default App
