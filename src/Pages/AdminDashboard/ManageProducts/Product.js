import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, handleProductDelete }) => {
    const {_id, name, img, category, price } = product;
    return (
        <tr className='item-tr'>
            <td><Link to={`/productDetails/${_id}`}><img className='product-img' src={img} alt="Product" /></Link></td>
            <td><Link to={`/productDetails/${_id}`}>{name}</Link></td>
            <td>$ {price}</td>
            <td>{category}</td>
            <td className='remove-item'><i onClick={() => handleProductDelete(_id, product)} className="fas fa-trash-alt"></i></td>
        </tr>
    );
};

export default Product;