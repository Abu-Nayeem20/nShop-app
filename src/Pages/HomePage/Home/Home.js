import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, userRole } from '../../../Redux/Slices/productsSlice';
import Footer from '../../SharedCompotents/Footer/Footer';
import Header from '../../SharedCompotents/Header/Header';
import NavTop from '../../SharedCompotents/NavTop/NavTop';
import Banner from '../Banner/Banner';
import CurrentOffer from '../CurrentOffer/CurrentOffer';
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory';
import NewProducts from '../NewProducts/NewProducts';
import PopularProducts from '../PopularProducts/PopularProducts';
import WhyWe from '../WhyWe/WhyWe';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const normalUser = useSelector((state) => state.products.user);
    const users = useSelector((state) => state.products.users);

    const adminUser = users.find(user => user?.email === normalUser?.email);
    dispatch(userRole(adminUser?.role));

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
            <Footer></Footer>
        </div>
    );
};

export default Home;