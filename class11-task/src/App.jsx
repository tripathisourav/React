import React from 'react'
import pe from './assets/pep.jpg'
import { Route, Routes } from 'react-router-dom'
import Events from './pages/Events'
import About from './pages/About'
import Login from './pages/Login'
import Features from './pages/Features'
import Communities from './pages/Communities'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Join from './pages/Join'

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full bg-top bg-cover relative' style={{ backgroundImage: `url(${pe})` }}>

      <Navbar />

      <div className='flex gap-5 items-center justify-center pt-70'>
        <Link to='/join' className='bg-black text-white rounded-4xl font-medium text-sm px-2 py-0.5'>
          Join for Free <i class='ri-arrow-right-line'></i>
        </Link>
        <Link to='/communities' className='bg-transparent border border-[#c0b8b8b4] text-black rounded-2xl font-medium text-sm px-2 py-0.5'>
          Explore Communities
        </Link>
      </div>

      <Routes>
        <Route path='/features' element={<Features />} />
        <Route path='/communities' element={<Communities />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
      {/* <div className='h-[100vh] w-full bg-top bg-cover' style={{backgroundImage: `url(${pe})`}}></div> */}
    </div>
  )
}

export default App
