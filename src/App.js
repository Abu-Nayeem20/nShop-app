import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/AboutPage/About';
import Login from './Pages/UserMaintain/Login/Login';
import ProductDetails from './Pages/SharedCompotents/ProductDetails/ProductDetails';
import Shop from './Pages/ShopPage/Shop';
import Cart from './Pages/SharedCompotents/Cart/Cart';
import initializeAuthentication from './Firebase/firebase.init';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from './Redux/Slices/productsSlice';
import PrivateRoute from './Pages/UserMaintain/PrivateRoute/PrivateRoute';

function App() {

  initializeAuthentication();
  const auth = getAuth();
  const user = useSelector((state) => state.products.user);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(storeUser({name: user.displayName, email: user.email, photo: user.photoURL}));
      } else {
        dispatch(storeUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<PrivateRoute>
          <Cart />
        </PrivateRoute>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
