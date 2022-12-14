import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <h1>Welcome To Proshop</h1> */}
          {/* <HomeScreen /> */}
          {/* <Route path='/' component={HomeScreen} exact />  old version*/}
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            {/* <Route path='/cart/:id?' element={<CartScreen />} /> Not Working */}
            <Route path='/cart/:id' element={<CartScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
