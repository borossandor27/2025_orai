import {BrowserRouter} from 'react-router-dom'
import { useContext } from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import './App.css'

function App() {
const isloggedin = useContext(false);
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Main />
      <Footer />
   </BrowserRouter>
  )
}

export default App
