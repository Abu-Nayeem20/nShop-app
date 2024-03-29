import React, { useState } from 'react';
import Header from '../../SharedCompotents/Header/Header';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../SharedCompotents/Footer/Footer';

const Login = () => {

    const [error, setError] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';

    // SAVE USER TO DATABASE
    const saveUser = (displayName, email, photo) => {
        const user = {displayName, email, photo};
        // console.log(user)
            
        fetch('https://nshope-apis.onrender.com/users', {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
            })
        .then()
     };

    // Google signIn
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            navigate(redirect_uri);
            saveUser(user.displayName, user.email, user.photoURL);
            setError('');
            
        }).catch((error) => {
            setError(error.message);
        });
    };
    

    return (
        <div>
            <Header />
            <div className="login-page">     
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        
                <div className='form-area'>
                    <div className='login-top-text'>
                        <h2>Welcome</h2>
                        <p>{error}</p>
                    </div>
                <div className='google-signin-btn'>
                <button onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                </div>
                    </div>
                </div>
             </div>
         </div>
         <Footer />
         </div>
    );
};

export default Login;