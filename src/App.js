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
import CheckOut from './Pages/UserDashboard/CheckOut/CheckOut';
import Payment from './Pages/UserDashboard/Payment/Payment';
import MyOrders from './Pages/UserDashboard/MyOrders/MyOrders';
import ThankYou from './Pages/UserDashboard/ThankYou/ThankYou';

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
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<PrivateRoute>
          <Cart />
        </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<PrivateRoute>
          <CheckOut />
        </PrivateRoute>} />
        <Route path="/payment/:id" element={<PrivateRoute>
          <Payment />
        </PrivateRoute>} />
        <Route path="/myOrders" element={<PrivateRoute>
          <MyOrders />
        </PrivateRoute>} />
        <Route path="/thankYou" element={<PrivateRoute>
          <ThankYou />
        </PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
