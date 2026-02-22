import axios from 'axios'
import React from 'react'



export const getAllData = async () => {
    const respone = await axios.get('https://fakestoreapi.com/products/')
    // console.log(respone.data);
    return respone.data
}

