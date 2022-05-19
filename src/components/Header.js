import React from 'react'
import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'





function Header() {


  const { auth } = useAuth();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    setAuth({});
    navigate('/');
  }

  const roleRoute = (role) => {
    if (role === 2001) {
      return 'ClientPage'
    } else if(role === 1984) {
      return 'EntreprisePage'
    } else if(role === 5150){
      return 'AdminPage'
    }else return 'Login'
      
  }

  const defineCompteRoute = () => {
    try {

      const r = roleRoute(auth?.roles[0]);
      return r ;
      
    } catch (error) {
      return "Login"
    }
  }

  
  console.log(auth.userId);
  
 

  return (

    <div className='header'>
        <div className='header-left'>
          <div className='logo'>CoNet</div>
          <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="Services">Nos Services</Link></li>
              <li>{ !auth?.userId ? <Link to="Login" >Se connecter</Link> : <Link to="/" onClick={logOut}>Se Deconnecter</Link>  } </li>       
          </ul>
        </div>
        
        <div className='header-right'>
          <Link to={defineCompteRoute()}>
          <div className='btn'>Mon compte</div>
          </Link>
        </div>
        
    </div>  
    
  )
}

export default Header
