import React from 'react'
import { createContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Section1 = () => {

    let data = createContext(ThemeContextData)
  return (
    <div>
      <h2>Section1</h2>
      <p>{data}</p>
    </div>
  )
}

export default Section1
