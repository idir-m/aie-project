import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <div className='header'>
        <div className='header-left'>
          <div className='logo'>CoNet</div>
          <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="Services">Nos Services</Link></li>
              <li><Link to="Login">Se connecter</Link></li>
          </ul>
        </div>
        <div className='header-right'>
          <div className='btn'>Boutique</div>
        </div>
    </div>  
    
  )
}

export default Header
