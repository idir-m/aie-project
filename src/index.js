import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import Services from './components/Services';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/Services' element={<Services />} />
      </Route>
      
      <Route path='/Login' element={<Login />}>
        
      </Route>
    </Routes>
      
    
     
  </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

