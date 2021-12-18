import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import NavTop from '../../SharedCompotents/NavTop/NavTop';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AddProduct.css'

const AddProduct = () => {

    const [smShow, setSmShow] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

const handleProductUp = e => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', stock);
    formData.append('desc', description);
    formData.append('img', image);


    fetch('https://sleepy-bayou-81445.herokuapp.com/products', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setSmShow(true);
                e.target.reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

    return (
        <div>
            <NavTop />
            <DashboardHeader />
            <div className='addProduct-page'>
            <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 shadow-lg py-5 px-4 rounded">
                <div className='addProduct-title'>
                <h2>Add New Product</h2>
            </div>
            <div className="product-form">
                <Form onSubmit={handleProductUp}>
                <Form.Control onChange={e => setName(e.target.value)} className='mb-3' size="lg" type="text" placeholder="Name" required />
                <Form.Control onChange={e => setPrice(e.target.value)} className='mb-3' size="lg" type="text" placeholder="Price" required />
                <Form.Control onChange={e => setCategory(e.target.value)} className='mb-3' size="lg" type="text" placeholder="Category" required />
                <Form.Control onChange={e => setStock(e.target.value)} className='mb-3' size="lg" type="text" placeholder="Stock" required />
                <Form.Control onChange={e => setDescription(e.target.value)} className='mb-3' as="textarea" rows={5} placeholder='Description' required />
                <Form.Control onChange={e => setImage(e.target.files[0])} className='mb-3' accept='image/*' type="file" size="lg" required />
                <button className='save-btn' type='submit'>Save</button>
                </Form>
            </div>
           
                </div>
            </div>
            </div>
            </div>
            <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Hey
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Product Added Successfully</h4>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default AddProduct;