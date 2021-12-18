import React, { useEffect, useState } from 'react';
import Header from '../../SharedCompotents/Header/Header';
import logo from '../../../images/nshop-logo.png';
import stripeImg from '../../../images/stripe.png';
import './Payment.css';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51Jw77eAPJel30nQhuBFLRAPWTlvToWoSiwKEicvArppHWK7bxQPOd3VS3J9F5rjObfpmiIAhgLDspX3GqpEWBbuZ00rySPrxrO');

const Payment = () => {

    const { id } = useParams();

    const [order, setOrder] = useState({});

    useEffect( () => {
        const url = `https://sleepy-bayou-81445.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrder(data);
        });
    }, [id]);

    // console.log(order)

    return (
        <div>
            <Header />
            <div className='payment-page'>
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>Payment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='payment-content'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className='payment-area shadow-lg rounded'>
                                        <div className='payment-top-logo'>
                                            <img src={logo} alt="nShop" />
                                        </div>
                                        <div className='payment-title'>
                                            <h3>Payment With Stripe</h3>
                                        </div>
                                        <div className='stripe-logo'>
                                            <img src={stripeImg} alt="Stripe_logo" />
                                        </div>
                                        <div className='payment-text'>
                                           <h5>Order ID: {order?._id}</h5>
                                           <h5>Amount: $ {order?.totalPrice}</h5>
                                        </div>
                                        <div>
                                        {order?.totalPrice &&
                                            <Elements stripe={stripePromise}>
                                            <PaymentForm 
                                            totalPrice={order?.totalPrice}
                                            id={order?._id}
                                            />
                                        </Elements>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Payment;