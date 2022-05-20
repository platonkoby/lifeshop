import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from '../context/CartContext';
import InventoryContextProvider from '../context/InventoryContext';
import StatsContextProvider from '../context/StatsContext';
import Cart from './Cart';
import Goals from './Goals';
import Home from './Home'
import Profile from './Profile';
import Shop from './Shop';

function App() {

  return (
    <div className="App">
      <StatsContextProvider>
        <CartContextProvider>
          <InventoryContextProvider>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/shop' element={<Shop />} />
              <Route path='/goals' element={<Goals />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </InventoryContextProvider>
        </CartContextProvider>
      </StatsContextProvider>
    </div>
  );
}

export default App;
