import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/Error/Error';
import Shop from '../../pages/Shop/Shop';
import CartPage from '../../pages/Cart/CartPage';

function App() {
  return (
        <Layout>
          <Routes>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route exact path="/" element={<Home />}/>
          </Routes>
        </Layout>
  );
}

export default App;
