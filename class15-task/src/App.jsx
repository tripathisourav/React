import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';
import Home from './pages/Home';

const App = () => {

  // const [productData, setProductData] = useState([])

  // const getAllData = async () => {
  //   console.log('All data aa gya');
  //   const respone = await axios.get('https://fakestoreapi.com/products/')

  //   // console.log(respone.data);

  //   setProductData(respone.data)
  // }

  // const getFirstData = async (num) => {
  //   console.log('First data aa gya');
  //   const respone = await axios.get(`https://fakestoreapi.com/products/${num}`)

  //   // console.log(respone.data);

  // }

  // useEffect(() => {
  //   getAllData()
  // }, [])
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductsDetails/>}/>
    </Routes>
  )
}

export default App
