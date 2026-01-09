import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import Header from './layout/Header'
import Footer from './layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


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
