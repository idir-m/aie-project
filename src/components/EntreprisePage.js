import React, { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import '../styles/EntreprisePage.css'
const serviceTest = {
     title: 'entreprise-01',
     description: 'good',
     imageUrl: 'truc.jpg',
     category: 'vitre',
     userId: '10b',
     price: 4580,
     wilaya:'Bejaia'

};



function EntreprisePage() {

  const axiosPrivate = useAxiosPrivate();

  const [titre, setTitre] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [wilaya, setWilaya] = useState('');
  const [description, setDiscription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
   
  const postService = async () => {
      try {
        const response = await axiosPrivate.post('/api/services/',
                {
                   ...serviceTest
                }
        );
        console.log(response?.data);
        console.log(response)
      } catch (error) {
        console.log('from axios post service request' +error);
      }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const truc = {
      titre,
      category,
      price,
      wilaya,
      description,
      imgUrl
    };
    console.log(truc);
  }


  return (
    <div>
        <h1>
          <button onClick={postService}>POST</button>
          <form className="form-ajout-service" onSubmit={handleSubmit}>
          <label>Titre</label><br/>
          <input className="input-service" 
                 type="text"
                 onChange={(e) => setTitre(e.target.value)}
                 value={titre} 
                 required/><br/>

          <label>catégorie</label><br/>
         <select className="input-service" 
                 onChange={(e) => setCategory(e.target.value)}
                 value={category} >
					   <option value='vitre'>Nettoyage des Vitres</option>
					   <option value='entreprise'>Nettoyage des Entreprises</option>
					   <option value='domicile'>Nettoyage a Domicile</option>
					
         </select><br/>

          <label>Prix (en Dinar)</label><br/>
          <input className="input-service"  
                 type="Number" 
                 onChange={(e) => setPrice(e.target.value)}
                 value={price}
                 required/><br/>

          <label>Wilaya</label><br/>
          <input className="input-service"  type="text" required
                   onChange={(e) => setWilaya(e.target.value)}
                   value={wilaya}
                   /><br/>

          <label>Description</label><br/>
          <textarea className="input-service"  name="decrire"  rows="6" cols="30"
                    onChange={(e) => setDiscription(e.target.value)}
                    value={description}/><br/>

          <label>URL de l'image</label><br/>
          <input className="input-service"  type="text" placeholder="http://...." required
                  onChange={(e) => setImgUrl(e.target.value)}
                  value={imgUrl}
                  /><br/>

          <button className="input-service" >Ajouter</button>
      </form>
        </h1>
    </div>
  )
}

export default EntreprisePage