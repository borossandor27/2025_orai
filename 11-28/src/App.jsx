import { useState, useEffect } from 'react';
import axios from 'axios';
import Felhasznalokartya from './compononents/Felhasznalokartya';

function App() {
  const [users, setUsers] = useState([]);
  let backendUrl = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    const felhasznalokBetoltese = async () => {
      try {
        let results = await axios.get(backendUrl);
        console.log(results.data.results);
        setUsers(results.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    felhasznalokBetoltese();
  }, []);


  return (
    <>
      <h1>Felhasználók listája</h1>
      {users.map((user, index) => (
        <Felhasznalokartya
          key={index}
          name={user.name}
          email={user.email}
          picture={user.picture}
        />
      ))}
    </>
  )
}

export default App
