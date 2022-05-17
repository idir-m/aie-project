import React, { useContext, useState } from "react";
import '../styles/login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthProvider";
import axios from "../axios/axios";

function LoginEntreprise() {

 const { setAuth } = useContext(AuthContext);

 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/" ;


 const [userEmail, setUserEmail] = useState('');
 const [pwd, setPwd] = useState('');


 const handleSubmit = async (e) => {
   e.preventDefault();
     try {
       const response = await axios.post('/api/auth/login/entreprise',
                {
                  email: userEmail,
                  password: pwd
                }
       );
        
       console.log(response?.data);

       const accesToken = response?.data?.accesToken;
       const roles = response?.data?.roles;
       
       setAuth({ userEmail, pwd, roles, accesToken });

       setUserEmail('');
       setPwd('');

       console.log(from);
       
       navigate(from, { replace: true })

     } catch (error) {
      console.log('from axios request' +error);
     }


 }

  return (
  
  
    <div className="center">
      <h1>Connexion (Pour entreprise)</h1>
      <form onSubmit={handleSubmit}>

        <div className="txt_field">
          <input 
               type="email"
               id="email"
               autoComplete="off"
               onChange={(e) => setUserEmail(e.target.value)}
               value={userEmail} 
               required/>
          <span></span>
          <label htmlFor="email">Adresse Email</label>
        </div>

        <div className="txt_field">
          <input 
               type="password"
               id="password"
               onChange={(e) => setPwd(e.target.value)}
               value={pwd} 
               required/>
          <span></span>
          <label htmlFor="password">Mot de passe</label>
        </div>
        
        <button className="submitBtn">Se connecter </button>
      </form>
      <div className="signup_link">
          Créer un copmte <Link to='/inscription'> S'inscrire</Link>
        </div>
        
    </div>
    
  );
}

export default LoginEntreprise;