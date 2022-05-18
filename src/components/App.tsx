import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BalanceContext } from '../context/Stats';
import { productsRequest, statsRequest } from '../firebase/firestore'
import Goals from './Goals';
import Home from './Home'
import Profile from './Profile';
import Shop from './Shop';

function App() {
  
  const [balance, setBalance] = useState(0);

  const updateBalance = (sum : number) => {
    setBalance((balance) => balance + sum)
  }

  useEffect(() => {
    const statsData = statsRequest
    .then((snapshot) => snapshot.docs.map((stat) => stat.data()))
    .then((stats) => stats.find(item => item.name === 'balance'))
    .then((balance) => setBalance(balance?.value))

  }, [])

  useEffect(() => {
    const productsData = productsRequest
    .then((snapshot) => snapshot.docs.map((product) => product.data()))
    .then((products) => console.log((products)))
    
  }, [])
 


  return (
    <div className="App">
      <BalanceContext.Provider value={{balance, updateBalance}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BalanceContext.Provider>
    </div>
  );
}

export default App;
