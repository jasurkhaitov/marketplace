import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Contexts } from './Context/Context';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [activePart, setActivePart] = useState('/seller')

  return (
    <div className='font-work px-[15px] lg:px-0'>
      <Contexts.Provider value={{activePart, setActivePart}}>
        <Navbar/>

        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>

      </Contexts.Provider>
    </div>
  );
}
  
export default App;