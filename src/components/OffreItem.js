import React from 'react'
import '../styles/OffreItem.css'

function OffreItem({id, photo, nom, wilaya, prix, description}) {
  return (
    <div key={id}  className='offre-itm'>
        <img src={photo} 
             alt='un truc' className='entreprise-img' />
        <div className='entreprise-nom'>{nom}</div>
        <div className='wilaya'>{wilaya}</div> 
        <div className='price'>{prix}£</div>
        <div className='description'>{description}</div>
    </div>
  )
}

export default OffreItem