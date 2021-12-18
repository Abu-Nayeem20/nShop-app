import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../../SharedCompotents/Header/Header';
import SingleOrder from './SingleOrder';
import './MyOrder.css'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const user = useSelector((state) => state.products.user);

    useEffect( () => {
        const url = `https://sleepy-bayou-81445.herokuapp.com/orders?email=${user.email}`;
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
                    <div className="container">
                    <div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;