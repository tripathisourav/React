import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1 className='text-5xl mb-10 font-bold underline text-white'>
        Products PAGE
      </h1>

      <div className='flex gap-5'>
        <Link className='text-xl font-semibold underline' to='/products/men'>Men's Collection</Link>
        {/* <Link className='text-xl font-semibold underline' to='/products/women'>Women's Collection</Link> */}
      </div>
    </div>
  )
}

export default Products
