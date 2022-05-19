import React from "react";
import '../styles/AjoutService.css'
import '../styles/login.css'


function AjoutService() {
  return (
      <div className="wrap-service-form">
      <form >
 
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

export default AjoutService;