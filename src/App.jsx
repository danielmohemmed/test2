import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import Card from './src/pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';

const App = () => {
  return (
    <StoreContextProvider>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>
    </div>
      </StoreContextProvider>
  );
};

export default App;

