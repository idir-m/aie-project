import React, {  useState } from "react";
import '../styles/login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from "../axios/axios";
import useAuth from "../hooks/useAuth";

function Login() {

 const { setAuth } = useAuth();

 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/" ;

 const [userEmail, setUserEmail] = useState('');
 const [pwd, setPwd] = useState('');


 const handleSubmit = async (e) => {
   e.preventDefault();
     try {
       const response = await axios.post('/api/auth/login',
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
       
       navigate(from, { replace: true })

     } catch (error) {
      console.log('from axios request' +error);
     }


 }

  return (
  
  
    <div className="center">
      <h1>Connexion</h1>
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
        
        <button className="submitBtn">Se connecter</button>
      </form>
      <div className="signup_link">
          Pas un membre? <Link to='/inscriptionClient'> S'inscrire</Link>
        </div>
        <div className="signup_link">
          Vous êtes une entreprise? <Link to='/LoginEntreprise'> par içi</Link>
        </div>
    </div>
    
  );
}

export default Login;