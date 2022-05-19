import React, { useEffect } from 'react'
import '../styles/Services.css'
import OffreItem from './OffreItem'
import Categories from './Categories'
import { useState } from 'react'
import Footer from './Footer'
import axios from '../axios/axios'


function Services() {

   const [categorie, updateCategorie] = useState('vitre')

   const [offresList, updateOffres] = useState([]);
   

    useEffect(() => {
      async function fetchData() {
        const req = await axios.get('/api/services/');

        updateOffres(req.data);
      }
      fetchData();
    }, []);

    const filtredOffresList = offresList.filter(
      (offre) => offre.category === categorie 
       );

    


  return (
    <div>
      <section className='services-banniere'>
        <div className='services-bnr-left' >
          <h1>
            Decouvrez nos 
            services.
          </h1>
          <h2>
            Faites votre choix
          </h2>
        </div>
        <div className='services-bnr-right'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit mi leo scelerisque leo quam dapibus leo. Integer convallis parturient lectus urna sit tellus in. </p>
        </div>
      </section>

      <section className='vitrine-offres'>
        <div className='vitrine-component'>
          <img src='https://www.d-o-c.be/images/photo-lavagevitre.jpg' 
               alt='something'  className='vitrine-photo'/>
          <div className='type-nett'>
            Nettoyage de vitre  
          </div>
        </div>
        <div className='vitrine-component'>
          <img src='https://thumbs.dreamstime.com/z/service-de-nettoyage-avec-l-quipement-professionnel-pendant-le-travail-kitchenette-sec-sofa-fen-tre-lavage-et-plancher-hommes-146098712.jpg' 
               alt='something'  className='vitrine-photo'/>
          <div className='type-nett'>
            Nettoyage à domicile 
          </div>
        </div>
        <div className='vitrine-component'>
          <img src='https://www.webfrance.com/wp-content/uploads/8236d5eac4523fed69277e5faf3025cc.jpe' 
               alt='something'  className='vitrine-photo'/>
          <div className='type-nett'>
            Nettoyage pour entreprises
          </div>
        </div>

      </section>

      <div className='separateur'>
      <h1>Vous avez le choix parmis les meilleurs entreprises en Algérie</h1>
      <h2>Vous n'avez qu'à choisir une catégorie !</h2>
      
      </div>

      <Categories
         categorie={categorie}
         updateCategorie={updateCategorie}
      />

      <section className='offres'>
        {filtredOffresList.map(({_id, title, description, imageUrl, price, wilaya}) => (
          <div key={_id}>
              <OffreItem
               _id={_id}
               title={title}
               description={description}
               imageUrl={imageUrl}
               price={price}
               wilaya={wilaya}
           />
          </div>
        ))}  
      </section>

      <Footer />

    </div>
  )
}

export default Services

