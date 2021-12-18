import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../../Redux/Slices/productsSlice';
import NavTop from '../../SharedCompotents/NavTop/NavTop';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Product from './Product';
import './ManageProducts.css'

const ManageProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products.products)


    const handleProductDelete = (id, product) => {
        const proceed = window.confirm("Want to Delete Product?");
        if(proceed){
            const url = `https://sleepy-bayou-81445.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                dispatch(deleteProduct(product));
            }
        });
        }
    };
    
    return (
        <div>
            <NavTop />
            <DashboardHeader />
            <div className="manage-product-page">
                <div className="container">
                    <div className='page-title'>
                        <h2>Products Management</h2>
                    </div>
                <div className='row'>
                <Table responsive>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleProductDelete={handleProductDelete}
                                ></Product>)
                            }
                        </tbody>
                        </Table>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;