import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Redux/Slices/productsSlice';
import './SingleProduct.css'

const SingleProduct = ({ product }) => {
    // console.log(product)
    const {img, name, price, _id} = product;
    const dispatch = useDispatch();

    const newProduct = {...product, quantity:1}
    // console.log(newProduct)
    const cart_item = useSelector((state) => state.products.cartItems);
    const cartProducts = cart_item.find(item => item._id === _id);
    // console.log(cartProducts)

    return (
        <div className="col">
        <div className="card h-100 shadow-lg rounded product">
        <div className='overflow-hidden'><img src={img} className="card-img-top" alt="Product" /></div>
        <div className="card-body">
            <div className='product-title'>
                <h4>{name}</h4>
            </div>
            <div className='price'>
            <p>{price}</p>
            </div>
            <div className='view-cart'>    
            <div className='view-product'>
                 <Link to={`/productDetails/${_id}`}>
                 <i className="far fa-eye"></i>
                 </Link>
            </div>
            {cartProducts ?
                <div className='add-cart'>
                <i className="fas fa-check"></i>
                </div>
                :
                <div className='add-cart'>
                <i onClick={() => dispatch(addToCart(newProduct))} className="fas fa-shopping-cart"></i>
                </div>
                }
            </div>
        </div>
        </div>
    </div>
    );
};

export default SingleProduct;