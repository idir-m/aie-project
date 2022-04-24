import React from 'react'
import '../styles/Services.css'
import OffreItem from './OffreItem'
import { offresList } from '../datas/offresList'



function Services() {
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

      <section className='offres'>
        {offresList.map(({id, photo, nom, wilaya, prix, description}) => (
          <div key={id}>
              <OffreItem
               id={id}
               photo={photo}
               nom={nom}
               wilaya={wilaya}
               prix={prix}
               description={description}
           />
          </div>
        ))}
           
      </section>
    </div>
  )
}

export default Services

