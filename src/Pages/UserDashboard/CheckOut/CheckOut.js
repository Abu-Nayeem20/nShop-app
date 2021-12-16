import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Header from '../../SharedCompotents/Header/Header';

const CheckOut = () => {
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
                                    <h2>Shipping Address</h2>
                                    <div>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Alex"
                                        />
                                        <label htmlFor="floatingInputCustom">Your Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="email"
                                        placeholder="Email"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Email</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        placeholder="Number"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Phone</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        placeholder="City"
                                        />
                                        <label htmlFor="floatingPasswordCustom">City</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="text"
                                        placeholder="address"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Full Address</label>
                                    </Form.Floating>
                                    <FloatingLabel
                                    className='mb-4' controlId="floatingTextarea2" label="Additional Notes">
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '150px' }}
                                    />
                                </FloatingLabel>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CheckOut;