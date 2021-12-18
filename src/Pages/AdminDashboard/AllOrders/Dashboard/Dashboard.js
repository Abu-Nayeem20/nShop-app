import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, fetchProducts, fetchUsers } from '../../../../Redux/Slices/productsSlice';
import NavTop from '../../../SharedCompotents/NavTop/NavTop';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './Dashboard.css';


const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);
    const orders = useSelector((state) => state.products.orders);
    // console.log(orders)
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const order of orders) {
        totalPrice = totalPrice + Number(order.totalPrice);
        totalQuantity = totalQuantity + order.totalQuantity;
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const users = useSelector((state) => state.products.users)


    return (
        <div>
            <NavTop></NavTop>
            <DashboardHeader />
            <div className='admin-dashboard'>
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='total-orders shadow-lg rounded'>
                            <h2><i className="fas fa-folder-open"></i> Orders</h2>
                            <div>
                                <h3>Total Order: {orders.length}</h3>
                                <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
                                <h3>Product Quantity: {totalQuantity}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='total-orders shadow-lg rounded'>
                            <h2><i className="fas fa-folder-open"></i> Products</h2>
                            <div>
                                <h3>Total Product: {products.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='total-orders shadow-lg rounded'>
                            <h2><i className="fas fa-users"></i> Users</h2>
                            <div>
                                <h3>Total User: {users.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;