import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ImprintPage from './pages/ImprintPage'

export default function App() {
  return (
    <div className="bg-sand-50 text-black-800 relative text-lg font-light">
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imprint" element={<ImprintPage />} />
      </Routes>
    </div>
  )
}
