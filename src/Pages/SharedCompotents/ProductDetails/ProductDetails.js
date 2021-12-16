import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { decreaseInputValue, increaseInputValue } from '../../../Redux/Slices/productsSlice';
import PopularProducts from '../../HomePage/PopularProducts/PopularProducts';
import Header from '../Header/Header';
import NavTop from '../NavTop/NavTop';
import './ProductDetails.css'

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect( () => {
        fetch(`https://secret-mountain-73898.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[id]);

    const dispatch = useDispatch();
    const count = useSelector((state) => state.products.productInputAmount);
    // console.log(count)
    // console.log(product)

    return (
        <div>
            <NavTop></NavTop>
            <Header></Header>
            <div className='product-details-info'>
                <div className='product-details-heading'>
                    <div className='container'>
                        <h2>Product Details</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='product-details-all'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='product-thumb'>
                                    <img className='img-fluid' src={product.img} alt="Product" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='product-information'>
                                    <div className='product-info-top'>
                                    <h2>{product.name}</h2>
                                    <h5>${product.price}</h5>
                                    <p>Category: Furniture</p>
                                    <p>Stock: Available</p>
                                    </div>
                                    <div className='product-amount-input'>
                                        <span className='plus'><i onClick={() => dispatch(increaseInputValue())} className="fas fa-plus"></i></span>
                                        <input type="number" value={count} disabled/>
                                        <span className='minus'><i onClick={() => dispatch(decreaseInputValue())} className="fas fa-minus"></i></span>
                                    </div>
                                    <div>
                                        <button className='buy-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                            <div className='product-description'>
                            <h3>Description:</h3>
                            <p>{product.desc}</p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default ProductDetails;