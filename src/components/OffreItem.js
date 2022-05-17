import React from 'react'
import '../styles/OffreItem.css'
import { useState } from 'react'


function OffreItem({_id, title, description, imageUrl, price, wilaya}) {

  const [isOpen, updateModal] = useState(false)

  return (
  
    <div key={_id} >
        { !isOpen ? (
            <div onClick={() => updateModal(true)} className='offre-itm'>
               <img src={imageUrl} 
                    alt='logo de l entreprise' className='entreprise-img' />
               <div className='entreprise-nom'>{title}</div>
               <div className='wilaya'>{wilaya}</div> 
               <div className='price'>{price}£</div>
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