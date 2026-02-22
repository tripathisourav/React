import React, { useContext } from 'react'
import { productDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const productData = useContext(productDataContext)
    // console.log(productData);

    const { id } = useParams()
    // console.log(id)

    const selectedProduct = productData.find((e) => (id) == e.id)

    if (!selectedProduct) {
        return <h2>Loading product...</h2>
    }

    return (
        <div>
            <div>
                <img src={selectedProduct.image} alt="" />
                <h2>{selectedProduct.title}</h2>
                <h5>${selectedProduct.price}</h5>
            </div>
        </div>
    )
}

export default ProductsDetails
