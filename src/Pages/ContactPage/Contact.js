import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../SharedCompotents/Footer/Footer';
import Header from '../SharedCompotents/Header/Header';
import NavTop from '../SharedCompotents/NavTop/NavTop';
import './Contact.css'

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <NavTop />
            <Header />
            <div className='contact-page'>
                <div className="container">
                    <div className="contact-heading">
                        <h2>Contact Us</h2>
                        <p>Accusantium incidunt eos non dignissimos necessitatibus explicabo, optio unde facere fugit</p>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 shadow-lg rounded mt-5">
                            <Form onSubmit={handleSubmit} className='contact-form'>
                            <Form.Control className='mb-4' size="lg" type="text" placeholder="Name" required/>
                            <Form.Control className='mb-4' size="lg" type="text" placeholder="Email" required/>
                            <Form.Control className='mb-4' size="lg" type="text" placeholder="Phone" required/>
                            <Form.Control className='mb-4' size="lg" type="text" placeholder="Subject" required/>
                            <Form.Control placeholder='Comment' as="textarea" rows={5} required />
                            <button className='contact-submit' type='submit'>Submit</button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;