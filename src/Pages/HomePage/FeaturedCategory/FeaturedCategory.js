import React from 'react';
import './FeaturedCategory.css';

const FeaturedCategory = () => {
    return (
        <div className='featured-section'>
            <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='feature-product'>
                        <img className='img-fluid' src="https://i.ibb.co/f87fzpb/feature1-0d6c20df.png" alt="" />
                        <div className='category-overlay'>
                        <h2>Outdoor Dining Furniture</h2>
                        <button>Shop Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                            <div className='feature-product'>
                            <img className='img-fluid' src="https://i.ibb.co/dth1wT7/feature2-ad97d945.png" alt="" />
                            <div className='category-overlay'>
                        <h2>Outdoor Dining Furniture</h2>
                        <button>Shop Now</button>
                        </div>
                            </div>
                            <div className='feature-product mt-4'>
                            <img className='img-fluid' src="https://i.ibb.co/fMPLJc7/feature3-1fe343e7.png" alt="" />
                            <div className='category-overlay'>
                        <h2>Outdoor Dining Furniture</h2>
                        <button>Shop Now</button>
                        </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='feature-product'>
                            <img className='img-fluid' src="https://i.ibb.co/2jRvZjG/feature4-79bcbcc4.png" alt="" />
                            <div className='category-overlay'>
                        <h2>Outdoor Dining Furniture</h2>
                        <button>Shop Now</button>
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

export default FeaturedCategory;