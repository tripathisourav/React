import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Footer = () => {

    const data = useContext(ThemeContextData)
    console.log(data);
    
  return (
    <div className='foot'>
      <h1>Footer</h1>
      {data[0]} 
      {/* data likhunga  tb bhi theme print hoga data[0] likhunga tb bhi*/}
    </div>
  )
}

export default Footer
