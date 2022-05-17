import React from "react";
import { Link } from "react-router-dom";
import about from '../assets/about.jpg';
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      
      <div className='about-top'>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={about}
              alt="Qui sommes nous ?"
              className="img"
            />
          
          <div class="description">
            <h1 class="font-bold-light">Qui sommes nous ?</h1>
            <p className="par">
            CoNet est une plateforme qui regroupe des entreprise 
            de nettoyage à travers toute l’Algérie, 
            afin que vous puissiez réserver le service qui vous convient le mieux
            </p>
          </div>

      </div>
            
        
        
          <div class="fonctionnement">
          <h1 class="font-bold-light" className="ti">Comment ça marche ?</h1>
            <p className="par1">
            Créez un compte si vous n’en avez pas,
            ensuite choisissez une offre et indiquez
            les détails qui vous seront demandés, 
            nos équipes se chargent du reste !   
            </p>
          </div>
           <div className="inscriptionBtn">
          <Link to="/Login"><div className='btn'>S'inscrire</div></Link> 
          </div>
        
     </div>
      
  );
}

export default About;