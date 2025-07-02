import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from "sonner";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import Checkout from './components/Cart/Checkout';

import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/Admin/UserManagement';
import ProductManagement from './components/Admin/ProductManagement';
import EditProductPage from './components/Admin/EditProductPage';
import OrderManagement from './components/Admin/OrderManagement';


import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from './components/Common/ProtectedRoute';
import OrderSuccess from './pages/OrderSuccess';
import ResellerRegister from './pages/ResellerRegister';
import AdminResellers from './components/Admin/AdminResellers';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { Analytics } from "@vercel/analytics/next"




const App = () => {
  return (
    <Provider store={store} >
    <BrowserRouter >
    <Toaster position="top-right" />
    <Routes >
      <Route  path="/" element={<UserLayout />}  >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collection/:collection" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />}  />
        
        <Route path="orders/:orderId" element={<OrderDetailsPage/>}  />
        <Route path="/my-orders" element={<MyOrdersPage  />} />
        <Route path='/reseller-register' element={<ResellerRegister />}       />
        <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />}/>
        <Route path="/contactus" element={<ContactUs  />} />
        <Route path="/aboutus" element={<AboutUs  />} />
        



       


        <Route path="/order-success" element={<OrderSuccess />} />
        </Route>
       
      <Route path="/admin" element={<ProtectedRoute  role="admin"
      
      
      
      ><AdminLayout /> </ProtectedRoute> } >
      
    <Route index element={<AdminHomePage />} />
    <Route path="users" element={<UserManagement />} />
    <Route path="products" element={<ProductManagement />} />
    <Route path='products/:id/edit' element={<EditProductPage />} />
    <Route path="orders" element={ <OrderManagement />} />
    <Route path="resellers" element={ <AdminResellers  />}    />

 
      </Route>
      
    
    </Routes>
     <Analytics />

    </BrowserRouter>
    </Provider>
  );
};

export default App;
