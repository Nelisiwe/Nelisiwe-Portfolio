import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PraticleBg from './components/PraticleBg'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Education from './pages/education/Education'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import './App.css'


function App() {
  // Returns the application's UI.
  return (
    <BrowserRouter>
      <PraticleBg />
      <Navbar />
      {/* This is the routes configuration. It defines the routes that are available in the application. */}
      <Routes>
        <Route index element={<Home />} />
        <Route path='education' element={<Education />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
