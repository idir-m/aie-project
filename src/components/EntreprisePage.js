import React, { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useEffect } from 'react';
import OffreItem from './OffreItem';
import axios from '../axios/axios';
import '../styles/EntreprisePage.css'
import useAuth from '../hooks/useAuth';




function EntreprisePage() {

  const axiosPrivate = useAxiosPrivate();

  const { auth } = useAuth();

  const [serviceList, setServiceList] = useState([]);

  const [productAdded, setProductAdded] = useState(0);

  

  


  const [title] = useState(auth.name);
  const [category, setCategory] = useState('vitre');
  const [price, setPrice] = useState(0);
  const [wilaya, setWilaya] = useState('');
  const [description, setDiscription] = useState('');
  const [imageUrl, setImgUrl] = useState('');
  const [userId] = useState(auth.userId);

  const [isActive, setIsActive] = useState(true);

  const [serviceId, setServiceId] = useState(0);
   
  const handleSubmit = async (e) => {
       e.preventDefault();

       

       console.log('ceci viens du post '+title+ ' ' +userId);

      try {
        const response = await axiosPrivate.post('/api/services',
                {
                  title,
                  description,
                  imageUrl,
                  category,
                  userId,
                  price,
                  wilaya
                }
        );
        console.log(response?.data);
        console.log(response)

        setProductAdded(productAdded + 1);

        setCategory('vitre');
        setDiscription('');
        setImgUrl('');
        setPrice(0);
        setWilaya('');

      } catch (error) {
        console.log('from axios post service request' +error.message);
      }

      
      console.log(productAdded);
  }

  const deleteService = async (id) => {
         try {
             const response = await axiosPrivate.delete(`/api/services/${id}`);
             
             console.log(response.data);

             setProductAdded(productAdded + 1);
             alert('Le service a été supprimé');
         } catch (error) {
          console.log('from axios delete service request' +error.message);
         }   
  } 

   

  const ouvrireLaModif = (id, category, description, imageUrl, wilaya, price) => {
    setIsActive(false);
    setCategory(category);
    setDiscription(description);
    setImgUrl(imageUrl);
    setWilaya(wilaya);
    setPrice(price);
    setServiceId(id);
    console.log('service '+serviceId);
    console.log(isActive);
  }


  const modifierService = async (e) => {

   e.preventDefault();

    try {
      const response = await axiosPrivate.put(`/api/services/${serviceId}`,
                {
                  title,
                  description,
                  imageUrl,
                  category,
                  userId,
                  price,
                  wilaya
                }
        );
        console.log(response?.data);
        console.log(response)

        setProductAdded(productAdded + 1);

        setCategory('vitre');
        setDiscription('');
        setImgUrl('');
        setPrice(0);
        setWilaya('');
        setIsActive(true);
        setServiceId(0);

    } catch (error) {
      console.log('from axios put service request' +error.message);
    }
  }

  


  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get('/api/services/');
        setServiceList(req.data);
      } catch (error) {
        console.log('from axios get service request' +error.message);
      }
      

      
    }
    fetchData();
  }, [productAdded]);


  const ouvrireAjout = () => {
    setIsActive(true);
    setCategory('vitre');
        setDiscription('');
        setImgUrl('');
        setPrice(0);
        setWilaya('');
  }

  
  const servicePerso = serviceList.filter(
    (offre) => offre.userId === userId
  );
  

  return (
    <div >
        
          
      { isActive ?

<div className='add-product-form'>

<h1>Ajoutez un service</h1>

       <form onSubmit={handleSubmit}>

     <select className="input-service"  
              onChange={(e) => setCategory(e.target.value)}
              value={category} >
          <option value='vitre'>Nettoyage des Vitres</option>
          <option value='entreprise'>Nettoyage des Entreprises</option>
          <option value='domicile'>Nettoyage a Domicile</option>
       
      </select><br/>


<div className="txt_field">
<input 
       type="text"
       id="wilaya"
       autoComplete="off"
       onChange={(e) => setWilaya(e.target.value)}
       value={wilaya}
       required/>
<span></span>
<label htmlFor="wilya">wilaya</label>
</div>

<div className="txt_field">
<input 
       type="text"
       id="price"
       autoComplete="off"
       onChange={(e) => setPrice(e.target.value)}
       value={price}
       required/>
<span></span>
<label htmlFor="price">price</label>
</div>

<div className="txt_field">
<input 
       
       id="description"
       onChange={(e) => setDiscription(e.target.value)}
       value={description} 
       required/>
<span></span>
<label htmlFor="description">desciption</label>

</div>


<div className="txt_field">
<input 
       type="text"
       id="imageUrl"
       autoComplete="off"
       onChange={(e) => setImgUrl(e.target.value)}
       value={imageUrl}
       required/>
<span></span>
<label htmlFor="imageUrl">imageUrl</label>
</div>

<button  className="submitBtn">Ajouter</button>

</form>

</div>

          :



<div className='add-product-form'>

   <h1>Modifier un service</h1>

          <form onSubmit={modifierService}>
 
        <select className="input-service"  
                 onChange={(e) => setCategory(e.target.value)}
                 value={category} >
					   <option value='vitre'>Nettoyage des Vitres</option>
					   <option value='entreprise'>Nettoyage des Entreprises</option>
					   <option value='domicile'>Nettoyage a Domicile</option>
					
         </select><br/>
 
 
 <div className="txt_field">
   <input 
          type="text"
          id="wilaya"
          autoComplete="off"
          onChange={(e) => setWilaya(e.target.value)}
          value={wilaya}
          required/>
   <span></span>
   <label htmlFor="wilya">wilaya</label>
 </div>
 
 <div className="txt_field">
   <input 
          type="text"
          id="price"
          autoComplete="off"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required/>
   <span></span>
   <label htmlFor="price">price</label>
  </div>
 
 <div className="txt_field">
   <input 
          
          id="description"
          onChange={(e) => setDiscription(e.target.value)}
          value={description} 
          required/>
   <span></span>
   <label htmlFor="description">desciption</label>
 
 </div>


 <div className="txt_field">
   <input 
          type="text"
          id="imageUrl"
          autoComplete="off"
          onChange={(e) => setImgUrl(e.target.value)}
          value={imageUrl}
          required/>
   <span></span>
   <label htmlFor="imageUrl">imageUrl</label>
  </div>
 
 <button  className="submitBtn">Modifier</button>
 
 </form>

 <span className='fermer_btn' onClick={ouvrireAjout}>fermer</span>

 

 
 </div>



      }



     {
       servicePerso.length
              
            ?
          
            <section className='offres'>
            {servicePerso.map(({_id, title, description, imageUrl, price, wilaya, category}) => (
              <div key={_id}>
                  <OffreItem
                   _id={_id}
                   title={title} 
                   description={description}
                   imageUrl={imageUrl}
                   price={price}
                   wilaya={wilaya}
               />
               <div className='btns-div'>
                    <button className='deleteBtn' onClick={() => deleteService(_id)}>Supprimer</button>
                    <button className='deleteBtn modifier' onClick={() => ouvrireLaModif(_id, category, description, imageUrl, wilaya, price)}>Modifier</button>
               </div>
               
              </div>
            ))}  
          </section>

            :
            <div className='aucun_service'>
              <h1>Vous n'avez aucun service pour l'instant</h1>
            </div>
     }
                              
    
    </div>
  )
}

export default EntreprisePage