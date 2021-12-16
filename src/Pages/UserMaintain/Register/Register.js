import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../SharedCompotents/Header/Header';

const Register = () => {

    // console.log(signInUsingGoogle)

    const handleNameChange = () => {

    };
    const handlePhotoChange = () => {

    };
    const handlePasswordChange = () => {

    };
    const handleEmailChange = () => {

    };
    const handleGoogleSignIn = () => {
            
    };
    const handleSubmitButton = () => {

    };
    const error = () => {

    }

    return (
        <div>
            <Header />
            <div className="register-page">
            <div className='container'>
            <div className='row'>
             <div className='col-md-6 offset-md-3'>
            <div className='form-area'>
                <div className='login-top-text'>
                    <h2>WELCOME TO REGISTRATION</h2>
                </div>
            <p className='text-danger'>{error}</p>
                <Form>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-user"></i>
                </Button>
                <FormControl
                type='text'
                onBlur={handleNameChange}
                placeholder='Name'
                required
                />
            </InputGroup>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-envelope"></i>
                </Button>
                <FormControl
                type='email'
                onBlur={handleEmailChange}
                placeholder='Email'
                required
                />
            </InputGroup>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-lock"></i>
                </Button>
                <FormControl
                type='password'
                onBlur={handlePasswordChange}
                placeholder='Password'
                required
                />
            </InputGroup>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="far fa-image"></i>
                </Button>
                <FormControl
                type='text'
                onBlur={handlePhotoChange}
                placeholder='Photo URL'
                required
                />
            </InputGroup>
                <button onClick={handleSubmitButton} className='regular-btn'>REGISTER</button>
                </Form>
                <div>
                    <h2 className='or-text'>Or</h2>

                <div className='google-signin-btn'>
                <button onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                <div className='new-user'>
                <h2>Already Have Account?</h2>
                <Link to='/login'>
                    <button className='regular-btn'>LOGIN</button>
                </Link>
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

export default Register;