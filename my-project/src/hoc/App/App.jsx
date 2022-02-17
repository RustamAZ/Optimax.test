import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/Error/Error';
import Shop from '../../pages/Shop/Shop';


function App() {
  return (
        <Layout>
          <Routes>
            <Route path="*" element={<ErrorPage />}/>
            <Route exact path="/" element={<Home />}/>
            <Route path="/shop" element={<Shop />}/>
          </Routes>
        </Layout>
  );
}

export default App;