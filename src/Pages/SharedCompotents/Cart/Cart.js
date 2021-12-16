import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PopularProducts from '../../HomePage/PopularProducts/PopularProducts';
import Header from '../Header/Header';
import NavTop from '../NavTop/NavTop';
import './Cart.css'
import SingleCart from './SingleCart/SingleCart';

const Cart = () => {
    const cart_item = useSelector((state) => state.products.cartItems);
    // console.log(cart_item)
    return (
        <div>
            <NavTop />
            <Header />
            <div className='cart-page'>
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>My Cart</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='cart-page-content'>
                    {cart_item.length === 0 ?
                        <div className="container">
                    <div className='cart-no-product'>
                        <h2>Looks you haven't added any product to your cart. </h2>
                        <Link to="/shop">
                        <button>Shop Now</button> 
                        </Link>
                        <h2>Happy Shopping!</h2>
                    </div>
                    <PopularProducts />    
                    </div>
                    :
                    <div className='cart-content'>
                        <div className="container">
                        <Table responsive>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart_item.map(item => <SingleCart
                                key={item._id}
                                item={item}
                                ></SingleCart>)
                            }
                        </tbody>
                        </Table>
                        </div>
                    </div>
                    }   
                </div>
            </div>
        </div>
    );
};

export default Cart;