import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { getAllData } from '../api/ProductApi';

export const productDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

    const setData =  async () => {
        const data =  await getAllData()
        // console.log(data);
        
        setProductData(data)
    }

    useEffect(() => {
        setData()
    }, [])
    

    return (
        <div>
            <productDataContext.Provider value={productData}>
                {props.children}
            </productDataContext.Provider>
        </div>
    )
}

export default ProductContext
