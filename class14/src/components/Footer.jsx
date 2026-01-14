import React, { useContext } from 'react'
import UserContext, { userDataContext } from '../context/UserContext'

const Footer = () => {
    const data = useContext(userDataContext)
    console.log(data)
  return (
    <div className='absolute w-screen bottom-0 h-10 bg-blue-700'>
      <h1>
        This is Footer
      </h1>
    </div>
  )
}

export default Footer
