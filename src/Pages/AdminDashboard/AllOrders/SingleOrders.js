import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SingleOrders = ({ order }) => {

    const [singleOrder, setSingleOrder] = useState(order);
    // console.log(order)
    const {_id, status, totalQuantity, totalPrice, name} = singleOrder;

    const updateStatusField = e => {
        const updatedStatus = e.target.value;
        updateStatus(_id, updatedStatus);
    };

    const updateStatus = (id, updatedStatus) => {
       
        const updateStatus = {status: updatedStatus};

        const url = `https://sleepy-bayou-81445.herokuapp.com/allOrders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const updatedOrder = {...singleOrder, status: updatedStatus };
                setSingleOrder(updatedOrder);
            }
        })

    }
        


    return (
        <tr className='tbody-td'>
            <td>{name}</td>
            <td>{_id}</td>
            <td>{totalQuantity}</td>
            <td>$ {totalPrice}</td>
            <td>
                {
                    singleOrder?.payment ?
                    "Paid" : "Unpaid"
                }
            </td>
            <td className='text-success'>{status}</td>
            <td>
            <div>
            <Form.Select size="lg" className='' onChange={updateStatusField}>
                <option>Pending</option>
                <option>Shipped</option>
                <option>Rejected</option>
            </Form.Select>
            </div>
            </td>
        </tr>
    );
};

export default SingleOrders;