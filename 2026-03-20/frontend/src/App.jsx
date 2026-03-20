import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Kep from './pages/Kep'
import Uj from './pages/Uj'
import Lista from './pages/Lista'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/kep" element={<Kep />} />
        <Route path="/uj" element={<Uj />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
