import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    
    <div className='header'>
        <div className='header-left'>
          <div className='logo'>CoNet</div>
          <ul>
              <li><span>Accueil</span></li>
              <li><span>Nos Services</span></li>
              <li><span>Se connecter</span></li>
          </ul>
        </div>
        <div className='header-right'>
          <div className='btn'>Boutique</div>
        </div>
    </div>  
    
  )
}

export default Header
