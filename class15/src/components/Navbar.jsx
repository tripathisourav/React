import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Navbar = () => {

    // const data = useContext(ThemeContextData) // gives theme
    const [theme, setTheme] = useContext(ThemeContextData) // Now gives both theme and setTheme

  return (
    <div className='nav'>
      <h1>Navbar</h1>
      <h2>{theme}</h2>
      <button onClick={() => {
        if(theme == 'light')
        {
            setTheme('dark')
        } else{
            setTheme('light')
        }
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
