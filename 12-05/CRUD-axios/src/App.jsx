import './App.css'
import axios from 'axios'
import { useState, useEffect, use } from 'react'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const url = "https://retoolapi.dev/yEtUV8/data";

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  const postData = async () => {
    const newData = {
      "Lakohely": "Debrecen, Nyár utca 13",
      "Munkakor": "Nagypapa",
      "TeljesNev": "Valaki Új"
    };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    };

    try {
      const response = await axios.post(url, newData, config);
      console.log("Data posted successfully:", response.data);
      getData(); // Refresh data after posting
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const updateData = async (id) => {
    const updatedData = {
      "Lakohely": "Budapest, Fő utca 1",
      "Munkakor": "Nagypapa",
      "TeljesNev": "Valaki Frissítve"
    };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    };

    try {
      const response = await axios.put(`${url}/${id}`, updatedData, config);
      console.log("Data updated successfully:", response.data);
      getData(); // Refresh data after updating
    }
    catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log("Data deleted successfully:", response.data);
      getData(); // Refresh data after deleting
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  return (
    <>
      <h1>CRUD with Axios</h1>
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={() => updateData(11)}>Update Data</button>
      <button onClick={() => deleteData(12)}>Delete Data</button>
    </>
  )
}

export default App
