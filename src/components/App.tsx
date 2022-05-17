import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { productsRequest } from '../firebase/firestore'
import Goals from './Goals';
import Home from './Home'
import Profile from './Profile';
import Shop from './Shop';

function App() {

  useEffect(() => {
    const productsData = productsRequest
    .then((snapshot) => snapshot.docs.map((product) => product.data()))
    .then((products) => console.log((products)))
    
  }, [])
 


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
