import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from '../context/CartContext';
import InventoryContextProvider from '../context/InventoryContext';
import StatsContextProvider from '../context/StatsContext';
import Checkout from './Checkout';
import EditGoalInventory from './EditGoalInventory';
import EditShopInventory from './EditShopInventory';
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
              <Route path='/cart' element={<Checkout />} />
              <Route path='/edit-shop-inventory' element={<EditShopInventory />} />
              <Route path='/edit-goal-inventory' element={<EditGoalInventory />} />
            </Routes>
          </InventoryContextProvider>
        </CartContextProvider>
      </StatsContextProvider>
    </div>
  );
}

export default App;
