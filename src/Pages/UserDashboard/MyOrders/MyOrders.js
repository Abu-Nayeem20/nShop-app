import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../../SharedCompotents/Header/Header';
import SingleOrder from './SingleOrder';
import './MyOrder.css'
import Footer from '../../SharedCompotents/Footer/Footer';
import { Link } from 'react-router-dom';
import PopularProducts from '../../HomePage/PopularProducts/PopularProducts';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const user = useSelector((state) => state.products.user);

    useEffect( () => {
        const url = `https://nshope-apis.onrender.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyOrders(data);
        })
    }, [user.email]);

    return (
        <div>
            <Header />
            <div className='my-orders-page'>
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>My Orders</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='myOrder-content'>
                {myOrders.length === 0 ?
                    <div className="container">
                    <div className='cart-no-product'>
                        <h2>Looks you haven't bought any product. </h2>
                        <Link to="/shop">
                        <button>Shop Now</button> 
                        </Link>
                        <h2>Happy Shopping!</h2>
                    </div>
                    <PopularProducts />    
                    </div>
                    :
                    <div className="container">
                    <div className='row'>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(order => <SingleOrder
                                key={order._id}
                                order={order}
                                ></SingleOrder>)
                            }
                        </tbody>
                        </Table>
                    </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyOrders;