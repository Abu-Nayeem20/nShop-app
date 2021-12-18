import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Slices/productsSlice';
import Footer from '../SharedCompotents/Footer/Footer';
import Header from '../SharedCompotents/Header/Header';
import NavTop from '../SharedCompotents/NavTop/NavTop';
import SingleProduct from '../SharedCompotents/SingleProduct/SingleProduct';
import './Shop.css';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products.products)

    return (
        <div>
            <NavTop></NavTop>
            <Header></Header>
            <div className='shop-page'>
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>Shop With Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="shop-all-product">
                    <div className="container">
                        <div className='shop-heading'>
                            <h2>Choose Now!!!</h2>
                        </div>
                        <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4'>
                        {
                        products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                        ></SingleProduct>)
                    }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;