import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FlottaPage from './pages/FlottaPage'
import UjPage from './pages/UjPage'
import KolcsonzesPage from './pages/KolcsonzesPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/flotta" element={<FlottaPage />} />
        <Route path="/uj" element={<UjPage />} />
        <Route path="/kolcsonzes" element={<KolcsonzesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
