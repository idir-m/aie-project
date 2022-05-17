import React from 'react'
import { offresList } from '../datas/offresList'
import '../styles/Categories.css'



function Categories({categorie, updateCategorie}) {

    const categories = offresList.reduce((acc, curr) => (
          acc.includes(curr.category) ? acc : [...acc, curr.category]
        ), []
        );

    function selectedValue(cat){
        updateCategorie(cat.target.value)
    }
  return (
    <div className='categorie-main-div'>
        <select className='select-cat' name='categories' value={categorie} onChange={selectedValue}>
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}  
        </select>
    </div>
  )
}

export default Categories