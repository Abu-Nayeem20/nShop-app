import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-sec'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6">
                        <div className='banner-text'>
                            <h2>Our Best Collections for You!</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className='banner-product'>
                        <img className='img-fluid' src="https://i.ibb.co/YtRQby7/product-2.png" alt="" />
                        </div>
                        </div>
                        </div>
                        <div className='row'>
                            <div className="col-4">
                            <div className='banner-product'>
                                <img className='img-fluid' src="https://i.ibb.co/cXj1scd/product-4.png" alt="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='banner-product'>
                                    <img className='img-fluid' src="https://i.ibb.co/vB5Sgn1/product-3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className='banner-product'>
                                    <img className='img-fluid' src="https://i.ibb.co/ZgvKgwG/product-1.png" alt="" />
                             </div>
                        </div>
                            </div>
            </div>
        </div>
    );
};



export default Banner;