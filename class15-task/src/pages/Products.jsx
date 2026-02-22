import React, { useContext } from 'react'
import { productDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

  const productData = useContext(productDataContext)
  // console.log(productData);

  let renderData = '';

  if(productData.length > 0){
    renderData = productData.map(function(e, idx){
        return <Link target='_blank' className='product' key={idx} to={`/products/${idx+1}`}>
            <div>
                <img src={e.image} alt="" />
                <h2>{e.title}</h2>
            </div>
        </Link>
      })
  }
  

  return (
    <div className='allProducts'>
      {renderData}
    </div>
  )
}

export default Products



