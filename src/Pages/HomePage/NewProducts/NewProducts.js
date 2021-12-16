import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../Redux/Slices/productsSlice';
import SingleProduct from '../../SharedCompotents/SingleProduct/SingleProduct';
import './NewProducts.css'

const NewProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products.products)
   
    const newProducts = [...products].reverse();
    
    const slicedProduct = newProducts.slice(0,8);
    // console.log(slicedProduct)

    return (
        <div className='new-products'>
            <div className="container">
                <div className='new-products-heading'>
                    <h2>Brand New Products</h2>
                    <p>Browse the huge varity of our products.</p>
                </div>
                <div className='new-products-content'>
                    <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4'>
                    {
                        slicedProduct.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                        ></SingleProduct>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;