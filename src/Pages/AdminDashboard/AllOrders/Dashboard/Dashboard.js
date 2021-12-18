import React from 'react';
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