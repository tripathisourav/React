import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>NavBar</h2>

        <input type="text" className='border-2' />
        {/* links pe click krne se routes change honge pr jo input mein likha hai woh same rahega */}
        <div className='flex gap-8 text-[12px] items-center'>
          {/* Link tag redirect karega pr reload nhi karega */}

          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
          <Link to='/courses'>Courses</Link>

          {/* ab Links pr click krne se routes change honge pr reload nhi hoga */}

          {/* <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/products">Products Page</a> */}
        </div>
    </div>
  )
}

export default Navbar
