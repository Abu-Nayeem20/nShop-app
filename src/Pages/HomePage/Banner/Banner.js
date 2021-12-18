import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-sec'>
            <div className='container'>
                <div className='row'>
                    <div className="col-6">
                        <div className='banner-text'>
                            <h2>Our Best Collections for You!</h2>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className='banner-product'>
                        <img className='img-fluid' src="https://i.ibb.co/vjFJJjR/2.png" alt="" />
                        </div>
                        </div>
                    <div className="col-3">
                    <div className='banner-product'>
                        <img className='img-fluid' src="https://i.ibb.co/T1HMrwC/1.png" alt="" />
                        </div>
                        </div>
                        </div>
                        <div className='row'>
                            <div className="col-3">
                            <div className='banner-product'>
                                <img className='img-fluid' src="https://i.ibb.co/nz814Dj/3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='banner-product'>
                                    <img className='img-fluid' src="https://i.ibb.co/RjmbR3B/4.png" alt="" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='banner-product'>
                                    <img className='img-fluid' src="https://i.ibb.co/hD7TwcB/6.png" alt="" />
                             </div>
                        </div>
                            <div className="col-3">
                                <div className='banner-product'>
                                    <img className='img-fluid' src="https://i.ibb.co/bgxFQWr/5.png" alt="" />
                             </div>
                        </div>
                            </div>
            </div>
        </div>
    );
};




export default Banner;