import React from 'react'
import '../styles/OffreItem.css'
import { useState } from 'react'


function OffreItem({id, photo, nom, wilaya, prix, description}) {

  const [isOpen, updateModal] = useState(false)

  return (
  
    <div key={id} >
        { !isOpen ? (
            <div onClick={() => updateModal(true)} className='offre-itm'>
               <img src={photo} 
                    alt='logo de l entreprise' className='entreprise-img' />
               <div className='entreprise-nom'>{nom}</div>
               <div className='wilaya'>{wilaya}</div> 
               <div className='price'>{prix}£</div>
            </div> ) : (

            <div onClick={() => updateModal(false)} className='offre-description'>
                  
                <div className='description'>
                   {description}
                </div>
                <button className='reserver-btn'>Reserver</button>
                 
            </div>

                 )} 
          
          
        
         
    </div>
    
  
  )
}

export default OffreItem