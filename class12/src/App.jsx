import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Navbar from './components/Navbar'
import Koder from './Pages/Koder'
import Kodex from './Pages/Kodex'
import AllCourses from './Pages/AllCourses'
import Footer from './components/Footer'


const App = () => {

  // const allRoutes = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   },
  //   {
  //     path: '/courses',
  //     element: <Courses />,
  //     children: [
  //       {
  //         path:'kodex',
  //         element:<Kodex/>
  //       },
  //       {
  //         path:'koder',
  //         element:<Koder/>
  //       },
  //     ]
  //   },
  // ]
  // )


  return (
    <div>
      <Navbar />

      {/* '/' route hamesha banao */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}>
          <Route path='/courses' element={<AllCourses/>} />
          <Route path='/courses/kodex' element={<Kodex/>} />
          <Route path='/courses/koder' element={<Koder/>} />
        </Route>
      </Routes>

      {/* <RouterProvider router={allRoutes} /> */}

      <Footer />
    </div>
  )
}

export default App
