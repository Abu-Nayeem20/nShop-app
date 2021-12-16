import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../../Redux/Slices/productsSlice';
import './SingleCart.css';

const SingleCart = ({ item }) => {
    const {_id, img, name, price, quantity} = item;

    const dispatch = useDispatch();

    const singleTotal = Number(price) * Number(quantity);

    return (
        <tr className='item-tr'>
            <td><Link to={`/productDetails/${_id}`}><img className='product-img' src={img} alt="Product" /></Link></td>
            <td><Link to={`/productDetails/${_id}`}>{name}</Link></td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>$ {singleTotal}</td>
            <td className='remove-item'><i onClick={() => dispatch(removeFromCart(item))} className="fas fa-trash-alt"></i></td>
        </tr>
    );
};

export default SingleCart;