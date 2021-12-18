import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, userRole } from '../../../../Redux/Slices/productsSlice';
import NavTop from '../../../SharedCompotents/NavTop/NavTop';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import './Dashboard.css';


const Dashboard = () => {

    return (
        <div>
            <NavTop></NavTop>
            <DashboardHeader />
            <div className='admin-dashboard'>
                
            </div>
        </div>
    );
};

export default Dashboard;