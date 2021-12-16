import React from 'react';
import './WhyWe.css'

const WhyWe = () => {
    return (
        <div className='whywe-sec'>
            <div className="container">
            <div className='row'>
                <div className="col-md-6 offset-md-6">
                    <div className='whywe-heading'>
                        <h2>Why We Are The Best</h2>
                        <div className='quality'>
                            <div className='row'>
                                <div className="col-4">
                                <i className="fas fa-boxes"></i>
                                <span> Quality</span>
                                </div>
                                <div className="col-4">
                                <i className="fas fa-boxes"></i>
                                <span> Quality</span>
                                </div>
                                <div className="col-4">
                                <i className="fas fa-boxes"></i>
                                <span> Quality</span>
                                </div>
                            </div>
                        </div>
                        <p className='whywe-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum nihil nisi laboriosam consequatur saepe voluptatibus voluptates modi repellendus hic.</p>
                        <button className='whywe-btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WhyWe;