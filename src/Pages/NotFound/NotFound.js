import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='container'>
                <div className='not-found-content'>
                    <h2>Nothing Found!!!</h2>
                    <Link to="/home"><button>Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;