import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ order }) => {
    // console.log(order)
    const {_id, status, totalQuantity, totalPrice, name} = order;
    return (
        <tr className='tbody-td'>
            <td>{name}</td>
            <td>{_id}</td>
            <td>{totalQuantity}</td>
            <td>$ {totalPrice}</td>
            <td>
                {order?.payment ?
                "Paid" :
                <Link to={`/payment/${_id}`}><button className='btn btn-primary'>Pay</button></Link>
                }
            </td>
            <td className='text-success'>{status}</td>
        </tr>
    );
};

export default SingleOrder;