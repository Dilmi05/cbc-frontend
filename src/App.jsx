 import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/homePage';
import LoginPage from './pages/logingPage';
import AdminHomePage from './pages/adminHomePage';
import ProductOverView from './pages/productOverView';
import Cart from './pages/cart';
import ProductPage from './pages/product';
  

function App() {
  return (


    
    <div className="bg-amber-300">
      
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<HomePage/>} />
          <Route path="/signup" element={<h1>Signup Page</h1>} />
          <Route path="/admin/*" element={<AdminHomePage />} />
          <Route path="/product-overview/:id" element={<ProductOverView />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
