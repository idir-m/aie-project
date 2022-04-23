import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <h1>Inscivez vous à notre newsLetter</h1>
      <h2>Recevez toutes les nouveautées ! entez votre adresse mail</h2>
      <input type='email' />
      <div className='submit-btn'>Submit</div>
    </footer>
  )
}

export default Footer