import React from 'react';
import Header from '../../SharedCompotents/Header/Header';
import logo from '../../../images/nshop-logo.png';
import './ThankYou.css'
import Footer from '../../SharedCompotents/Footer/Footer';

const ThankYou = () => {
    return (
        <div>
            <Header />
            <div className='thank-page'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <div className='shadow-lg rounded thank-content'>
                        <div className='nshop-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='thank-you'>
                        <h2>Thank You For Your Order</h2>
                        <p>Your Order will deliver soon!</p>
                    </div>
                    <div className='happy'>
                        <h2>HAPPY SHOPPING</h2>
                    </div>
                    <div className='social-icon'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
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

export default ThankYou;