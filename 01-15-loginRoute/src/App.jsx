import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Navbar from './layout/Navbar.jsx'
import Main from './layout/Main.jsx'
import './App.css'
import { AuthProvider } from './context/AuthContext.jsx'
function App() {

  return (
    <AuthProvider>
      {/* a BrowserRouter komponensben is használni szeretnénk a hitelesítési kontextust */}
      <BrowserRouter>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
