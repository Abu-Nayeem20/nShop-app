import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/nshop-logo.png';
import { fetchProducts } from '../../../Redux/Slices/productsSlice';
import './Header.css'

const Header = () => {
    const [displayProduct, setDisplayProduct] = useState([]);
    const [searchShow, setSearchShow] = useState(false);
    
    const cart_item = useSelector((state) => state.products.cartItems);

    const user = useSelector((state) => state.products.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector((state) => state.products.products)

    const handleSearch = e => {
        const searchText = e.target.value;
        setSearchShow(true);
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProduct(matchedProducts);
        
    };
    const hideSearchresult = () => {
        setSearchShow(false);
    }

    return (
        <div className=''>
            <Navbar bg="dark" expand={false}>
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <div className='search-area'>
                <div className='search-bar'>
                <input onChange={handleSearch} type="text" placeholder='Search'/>
                <i className="fas fa-search"></i>
                {searchShow &&
                    <div className='searchProduct-show'>
                        <i onClick={hideSearchresult} className="fas fa-times"></i>
                        <ul>
                            {displayProduct.length === 0 ?
                            <p>No Result Found</p>
                            :
                            displayProduct.map(product => <li
                            key={product._id}
                            ><Link to={`/productDetails/${product._id}`}>{product.name} <img className='img-fluid' src={`data:image/png;base64,${product.img}`} alt={product.name} /></Link></li>)
                            }
                        </ul>
                    </div>
                }
                </div>
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
                    {user?.email &&
                    <>
                    <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    </>
                    }
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;