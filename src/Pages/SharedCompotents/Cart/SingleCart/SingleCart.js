import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../Redux/Slices/productsSlice';
import './SingleCart.css';

const SingleCart = ({ item }) => {
    const {img, name, price, quantity} = item;

    const dispatch = useDispatch();

    return (
        <tr className='item-tr'>
            <td><img className='product-img' src={img} alt="Product" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>1</td>
            <td className='remove-item'><i onClick={() => dispatch(removeFromCart(item))} className="fas fa-trash-alt"></i></td>
        </tr>
    );
};

export default SingleCart;