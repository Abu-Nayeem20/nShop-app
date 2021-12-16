import React from 'react';
import WhyWe from '../HomePage/WhyWe/WhyWe';
import Header from '../SharedCompotents/Header/Header';
import NavTop from '../SharedCompotents/NavTop/NavTop';

const About = () => {
    return (
        <div>
            <NavTop></NavTop>
            <Header></Header>
            <div className='about-page'>
            <div className='product-details-heading'>
                    <div className='container'>
                        <h2>Who We Are!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <WhyWe></WhyWe>
        </div>
    );
};

export default About;