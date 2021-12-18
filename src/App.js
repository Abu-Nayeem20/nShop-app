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
import { useDispatch } from 'react-redux';
import { storeUser } from './Redux/Slices/productsSlice';
import PrivateRoute from './Pages/UserMaintain/PrivateRoute/PrivateRoute';
import CheckOut from './Pages/UserDashboard/CheckOut/CheckOut';
import Payment from './Pages/UserDashboard/Payment/Payment';
import MyOrders from './Pages/UserDashboard/MyOrders/MyOrders';
import ThankYou from './Pages/UserDashboard/ThankYou/ThankYou';
import Dashboard from './Pages/AdminDashboard/AllOrders/Dashboard/Dashboard';
import AllOrders from './Pages/AdminDashboard/AllOrders/AllOrders';
import ManageProducts from './Pages/AdminDashboard/ManageProducts/ManageProducts';
import AddProduct from './Pages/AdminDashboard/AddProduct/AddProduct';
import ManageUsers from './Pages/AdminDashboard/ManageUsers/ManageUsers';
import AdminRoute from './Pages/AdminDashboard/AdminRoute/AdminRoute';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/ContactPage/Contact';
import Scroller from './Pages/SharedCompotents/Scroller/Scroller';

function App() {

  initializeAuthentication();
  const auth = getAuth();
  // const user = useSelector((state) => state.products.user);

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
        <Route path="/contact" element={<PrivateRoute>
          <Contact />
        </PrivateRoute>} />
        <Route path="/thankYou" element={<PrivateRoute>
          <ThankYou />
        </PrivateRoute>} />
        <Route path="/dashboard" element={<AdminRoute>
          <Dashboard />
        </AdminRoute>} />
        <Route path="/dashboard/allOrders" element={<AdminRoute>
          <AllOrders />
        </AdminRoute>} />
        <Route path="/dashboard/manage-products" element={<AdminRoute>
          <ManageProducts />
        </AdminRoute>} />
        <Route path="/dashboard/addProduct" element={<AdminRoute>
          <AddProduct />
        </AdminRoute>} />
        <Route path="/dashboard/manageUsers" element={<AdminRoute>
          <ManageUsers />
          </AdminRoute> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Scroller />
    </div>
  );
}

export default App;
