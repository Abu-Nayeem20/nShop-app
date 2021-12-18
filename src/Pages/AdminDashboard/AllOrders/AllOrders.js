import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../Redux/Slices/productsSlice';
import NavTop from '../../SharedCompotents/NavTop/NavTop';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import SingleOrders from './SingleOrders';
import './AllOrders.css'

const AllOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);
    const orders = useSelector((state) => state.products.orders)
    // console.log(orders)
    return (
        <div>
            <NavTop />
            <DashboardHeader />
            <div className='allOrders-content'>
                <div className="container">
                  <div className="row">
                  <Table responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <SingleOrders
                                key={order._id}
                                order={order}
                                ></SingleOrders>)
                            }
                        </tbody>
                        </Table>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;