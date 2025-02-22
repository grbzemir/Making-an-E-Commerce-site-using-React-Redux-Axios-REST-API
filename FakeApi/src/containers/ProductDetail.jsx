import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    /*UseParams route işlemlerini gösterir Http urlelerine erişme*/
    const dispatch = useDispatch();
    console.log(product);
    const fetchProductsDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(selectedProduct(response.data));

    };

    useEffect(() => {

        return (
            <div>
                <h1>Product Detail</h1>
            </div>
        );
    };

    export default ProductDetail
