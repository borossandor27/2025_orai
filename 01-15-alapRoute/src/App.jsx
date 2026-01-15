import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Navbar from './layout/Navbar.jsx'
import Main from './layout/Main.jsx'
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
