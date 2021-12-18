import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/Slices/productsSlice';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './ManageUsers.css'
import SingleUser from './SingleUser';

const ManageUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const users = useSelector((state) => state.products.users)
    // console.log("Users", users)

    return (
        <div>
            <DashboardHeader />
            <div className='manage-users-page'>
                <div className="container">
                <div className='page-title'>
                    <h2>Users Management</h2>
                </div>
                    <div className="row">
                            <Table responsive>
                        <thead>
                            <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <SingleUser
                                key={user._id}
                                user={user}
                                ></SingleUser>)
                            }
                        </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;