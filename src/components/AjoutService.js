import React from "react";
import '../styles/AjoutService.css'
function AjoutService() {
  return (
      <div className="wrap-service-form">
      <form className="form-ajout-service">
          <label>Titre</label><br/>
          <input className="input-service" type="text" required/><br/>

          <label>catégorie</label><br/>
          <select className="input-service" >
					<option value='vitre'>Nettoyage des Vitres</option>
					<option value='entreprise'>Nettoyage des Entreprises</option>
					<option value='domicile'>Nettoyage a Domicile</option>		
          </select><br/>

          <label>Prix (en Dinar)</label><br/>
          <input className="input-service"  type="Number" required/><br/>

          <label>Wilaya</label><br/>
          <input className="input-service"  type="text" required/><br/>

          <label>Description</label><br/>
          <textarea className="input-service"  name="decrire"  rows="6" cols="30"/><br/>

          <label>URL de l'image</label><br/>
          <input className="input-service"  type="text" placeholder="http://...." required/><br/>

          <button className="input-service" >Ajouter</button>
      </form>

      </div>
  );
}

export default AjoutService;