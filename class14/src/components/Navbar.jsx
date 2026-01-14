import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = ({brand, children}) => {

  const data = useContext(userDataContext)
  // console.log(data); 
  

  // console.log(props) // {brand: 'Sheriyans', children: {…}}
  return (
    <div className='h-10 w-full bg-emerald-600'>
      <h1>{brand}: This is {children}</h1>
    </div>
  )
}

export default Navbar
