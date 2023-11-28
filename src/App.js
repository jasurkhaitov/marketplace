import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Contexts } from './Context/Context';
import { Route, Routes } from 'react-router-dom';
import Discount from './pages/Discount';
import Liked from './pages/Liked';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {

  const [activePart, setActivePart] = useState('/seller')

  return (
    <div className='font-work px-[15px] lg:px-0'>
      <Contexts.Provider value={{activePart, setActivePart}}>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/discount' element={<Discount/>}/>
          <Route path='/liked' element={<Liked/>}/>
          <Route path='/chosen' element={<Store/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>

      </Contexts.Provider>
    </div>
  );
}
  
export default App;