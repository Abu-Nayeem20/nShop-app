import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/nshop-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div>
                            <Link to='/home'>
                            <img className='bottom-logo' src={logo} alt="" />
                            </Link>
                            <p className='text-light py-5'> <span className='colored-name'>nShop</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere non sequi eligendi! Similique quam placeat perspiciatis.</p>
                        </div>
                        <div className='follow-us'>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 className='title-text'>QUICK LINKS</h3>
                        <div className='quick-link'>
                            <p>
                            <Link to="/home">Home</Link>
                            </p>
                            <p>
                            <Link to="/shop">Shop</Link>
                            </p>
                            <p>
                            <Link to='/about'>
                                About Us
                            </Link>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 className='title-text'>CONTACT US</h3>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-phone me-3"></i>
                        <p>+880 123456789</p>
                        </div>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-envelope me-3"></i>
                        <p>example@gmail.com</p>
                        </div>
                        <div className='contact-item d-flex justify-content-center'>
                        <i className="fas fa-map-marker-alt me-3"></i>
                        <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright-text'>
                <p><i className="fas fa-copyright"></i> Copyright <span>nShop</span> 2021 | Developed by Nayeem</p>
            </div>
        </div>
    );
};

export default Footer;