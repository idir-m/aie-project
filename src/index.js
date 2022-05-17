import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import Services from './components/Services';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Inscription from './components/Inscription';
import InscriptionClient from './components/InscriptionClient'
import { AuthProvider } from './context/AuthProvider';
import LoginEntreprise from './components/LoginEntreprise';
import AdminPage from './components/AdminPage';
import ClientPage from './components/ClientPage';
import EntreprisePage from './components/EntreprisePage';
import RequireAuth from './components/RequireAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
     <Routes>
       <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Inscription' element={<Inscription />} />
        <Route path='/InscriptionClient' element={<InscriptionClient />} />
        <Route path='/LoginEntreprise' element={<LoginEntreprise />}/>

        <Route element={<RequireAuth />}>
          <Route path='/AdminPage' element={<AdminPage />}/>
          <Route path='/ClientPage' element={<ClientPage />}/>
          <Route path='/EntreprisePage' element={<EntreprisePage />}/>
        </Route>
        


       </Route>
     </Routes>
    </AuthProvider> 
    
     
  </BrowserRouter>
    
  
);



