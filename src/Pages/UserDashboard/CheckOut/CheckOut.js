import React, { useState } from 'react';
import { FloatingLabel, Form, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refreshCart } from '../../../Redux/Slices/productsSlice';
import Footer from '../../SharedCompotents/Footer/Footer';
import Header from '../../SharedCompotents/Header/Header';
import './CheckOut.css';

const CheckOut = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart_item = useSelector((state) => state.products.cartItems);
    // console.log(cart_item)

    const user = useSelector((state) => state.products.user);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart_item) {
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 50 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    // Order confirm area

    const initialInfo = { 
        name: user?.name, 
        email: user.email,
        phone: '', 
        city: '', 
        address: '', 
        note: '',
        // products: cart_item,
        totalQuantity: totalQuantity,
        totalPrice: grandTotal.toFixed(2)
    }

    const [orderInfo, setOrderInfo] = useState(initialInfo);
    // console.log(orderInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
        // console.log(orderInfo)
    }

    const handleOrderPlace = e => {
        e.preventDefault();

        fetch('https://nshope-apis.onrender.com/orders', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                e.target.reset();
                navigate('/myOrders');
                dispatch(refreshCart())
            }
        })
    }



    return (
        <div>
            <Header />
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>Checkout</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='checkout-page'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='shipping-info'>
                                    <h2>Shipping Information</h2>
                                    <div>
                                    <Form onSubmit={handleOrderPlace}>    
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        name='name'
                                        onBlur={handleOnBlur}
                                        placeholder="Alex"
                                        defaultValue={user?.name || ''}
                                        required
                                        />
                                        <label htmlFor="floatingInputCustom">Your Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="email"
                                        name='email'
                                        onBlur={handleOnBlur}
                                        placeholder="Email"
                                        defaultValue={user?.email || ''}
                                        required
                                        />
                                        <label htmlFor="floatingPasswordCustom">Email</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        name='phone'
                                        onBlur={handleOnBlur}
                                        placeholder="Number"
                                        required
                                        />
                                        <label htmlFor="floatingPasswordCustom">Phone</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        name='city'
                                        onBlur={handleOnBlur}
                                        placeholder="City"
                                        required
                                        />
                                        <label htmlFor="floatingPasswordCustom">City</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        name='address'
                                        onBlur={handleOnBlur}
                                        placeholder="address"
                                        required
                                        />
                                        <label htmlFor="floatingPasswordCustom">Full Address</label>
                                    </Form.Floating>
                                    <FloatingLabel
                                    className='mb-4' controlId="floatingTextarea2" label="Additional Notes">
                                    <Form.Control
                                    as="textarea"
                                    name='note'
                                    onBlur={handleOnBlur}
                                    placeholder="Leave a comment here"
                                    style={{ height: '150px' }}
                                    />
                                </FloatingLabel>
                                <div className='order-action'>
                                    <button type='submit'>Place Order</button>
                                </div>
                                </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='your-order'>
                                    <h2>Your Order</h2>
                                    <div>
                                <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td>$ {total.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>$ {shipping.toFixed(2)} <small>(Flat Rate)</small></td>
                                    </tr>
                                    <tr>
                                        <td>Tax <small>(10%)</small></td>
                                        <td>$ {tax.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$ {grandTotal.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                                </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
    );
};

export default CheckOut;