import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes, Link } from 'react-router-dom'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import RandomAbout from './pages/RandomAbout'
import Cohort1 from './pages/Cohort1'
import AnyCourse from './pages/AnyCourse'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-5xl font-bold absolute top-1/2 left-1/2 -translate-1/2 underline'>
        <About />
        <Home />
      </h1> */}

      {/* <h1>Jai Hind Dosto!</h1>   */}
      {/* ye waisa hi rahega page khi ka khi pahuch jaye ye hamesha likha rahega */}



      {/* <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>NavBar</h2>
        <div className='flex gap-8 text-[12px] items-center'>

          <Link></Link>

          <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/products">Products Page</a>
        </div>
      </div> */}


      <Navbar />

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/courses' element={<Courses />} />

        {/* Nested Routes */}
        <Route path='/products/men' element={<Men />} />
        <Route path='/courses/cohort1' element={<Cohort1 />} />


        {/* Dynamic Route */}

        <Route path='/about/:id' element={<RandomAbout />} />
        {/* ab about/ ke baad kuch bhi ant shant likhunga yehi wala page khulega */}
        <Route path='/courses/:courseId' element={<AnyCourse />} />

        {/* Nested Dynamic Routes */}
        <Route path='/courses/:courseId/detail' element={<CourseDetail />} />

        {/* Not Found */}
        <Route path = '/*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
