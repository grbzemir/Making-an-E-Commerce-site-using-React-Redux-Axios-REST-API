import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productAction'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
    const { productId } = useParams();
    /*UseParams route işlemlerini gösterir Http urlelerine erişme*/
    const dispatch = useDispatch();
    console.log(productId);
    const fetchProductsDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(selectedProduct(response.data));

    };
    return (
        <div>
            <h1>Product Detail</h1>
        </div>
    );
};

export default ProductDetail
