import React, { useState } from "react";
import '../styles/login.css'
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
function Inscription() {


  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAdress, setUserAdress] = useState('');
  const [pwd, setPwd] = useState('');


  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      
      const response = await axios.post('/api/auth/register/entreprise',
              { 
                email: userEmail, 
                name: userName,
                adress: userAdress, 
                password: pwd 
              }
      );

      console.log(response?.data);
      console.log(response)

      setUserEmail('');
      setPwd('');
      setUserAdress('');
      setUserName('');

      navigate('/LoginEntreprise', { replace: true })
    } catch (error) {
      console.log('from axios request' +error);
    }
  }


  return (

    
    <div className="center">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>

        <div className="txt_field">
          <input 
                 type="email"
                 id="adressemail"
                 
                 onChange={(e) => setUserEmail(e.target.value)}
                 value={userEmail}
                 required/>
          <span></span>
          <label htmlFor="adresseMail">Adresse Email</label>
        </div>

        <div className="txt_field">
          <input 
                 type="text"
                 id="name"
                 autoComplete="off"
                 onChange={(e) => setUserName(e.target.value)}
                 value={userName}
                 required/>
          <span></span>
          <label htmlFor="name">Nom de l'entreprise</label>
        </div>

        <div className="txt_field">
          <input 
                 type="text"
                 id="adress"
                 autoComplete="off"
                 onChange={(e) => setUserAdress(e.target.value)}
                 value={userAdress}
                 required/>
          <span></span>
          <label htmlFor="adress">Adresse</label>
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
        
        <button  className="submitBtn">S'inscrire</button>
        
      </form>
    </div>
    
  );
}

export default Inscription;