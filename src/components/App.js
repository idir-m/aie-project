
import '../styles/App.css';
import Header from './Header';

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    
    <div className='App'>
      
       <Header />

       <Outlet />
    </div>
       
          
      
    
  );
}

export default App;
