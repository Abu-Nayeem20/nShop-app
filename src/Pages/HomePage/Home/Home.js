import React from 'react';
import Header from '../../SharedCompotents/Header/Header';
import NavTop from '../../SharedCompotents/NavTop/NavTop';
import Banner from '../Banner/Banner';
import CurrentOffer from '../CurrentOffer/CurrentOffer';
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory';
import NewProducts from '../NewProducts/NewProducts';
import PopularProducts from '../PopularProducts/PopularProducts';
import WhyWe from '../WhyWe/WhyWe';

const Home = () => {
    return (
        <div>
            <NavTop></NavTop>
            <Header></Header>
            <Banner></Banner>
            <FeaturedCategory></FeaturedCategory>
            <CurrentOffer></CurrentOffer>
            <NewProducts></NewProducts>
            <PopularProducts></PopularProducts>
            <WhyWe></WhyWe>
        </div>
    );
};

export default Home;