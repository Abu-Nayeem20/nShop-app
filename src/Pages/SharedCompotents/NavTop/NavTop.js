import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavTop.css';
import { getAuth, signOut } from "firebase/auth";
import { NavDropdown } from 'react-bootstrap';

const NavTop = () => {
    const auth = getAuth();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const user = useSelector((state) => state.products.user);
    // console.log(user)
    return (
        <div className='navTop-sec'>
            <div className="container-fluid">
                <div className="navTop-content">
                    <div className='welcome-text'>
                        <p>Welcome To Our Store...</p>
                    </div>
                    <div className='user-regi'>
                        <ul>
                            {user ?
                            <NavDropdown className='profile-area' title={<img className='profile-icon' src={user?.photo} alt="" />} id="collasible-nav-dropdown">
                                <p>{user?.name}</p>
                                <p>{user?.email}</p>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item><button onClick={handleLogOut} className='btn btn-danger'>Logout</button>
                            </NavDropdown.Item>
                          </NavDropdown>
                                :
                            <li><Link to="/login"><i className="fas fa-user"></i> Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavTop;