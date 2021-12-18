import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/nshop-logo.png';

const DashboardHeader = () => {
    return (
        <div>
            <div className='menu-bar'>
                <Navbar bg="dark" expand={false}>
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
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
                    <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/manage-products">Manage Products</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/addProduct">Upload Product</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/allOrders">Manage Orders</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
                </div>
        </div>
    );
};

export default DashboardHeader;