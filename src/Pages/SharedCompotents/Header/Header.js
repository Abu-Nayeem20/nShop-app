import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/nshop-logo.png';
import './Header.css'

const Header = () => {
    const cart_item = useSelector((state) => state.products.cartItems);
    return (
        <div className=''>
            <Navbar bg="dark" expand={false}>
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <div className='search-bar'>
                <input type="text" placeholder='Search'/>
                <i className="fas fa-search"></i>
                </div>
                <div className='wishNcart-icon'>
                <i className="fas fa-heart"><span>0</span></i>
                <i className="fas fa-shopping-cart"><span>{cart_item.length || 0}</span></i>
                </div>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menus</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/cart">My Cart</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;