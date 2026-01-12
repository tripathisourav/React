import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AllSections from './components/AllSections'
import Footer from './components/Footer'

const App = () => {

  // const courseData = {
  //   courseName: 'Cohort 2.0',
  //   instructor: 'Sarthak',
  //   mentor: 'Sorav',
  //   duration: '6 months'
  // }

  // props drilling krni padegi baar baar


  const[theme, setTheme] = useState('light')


  const changeTheme = (newTheme) => { // lifting state up child se parent ki or data transfer
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme = {theme} setTheme = {setTheme}  changeTheme = {changeTheme}/>
      
      {/* <AllSections/>
      <Footer/> */}
    </div>
  )
}

export default App
