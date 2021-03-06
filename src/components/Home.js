import React from 'react'
import { Link } from 'react-router-dom'
import worker from '../assets/worker.jpg'
import '../styles/Home.css'
import CommentItem from './CommentItem'
import Footer from './Footer'
function Home() {
  return (
  <div> 
    
    <section className='banniere'>
        <div className='section-left'>
            <h1 className='main-slogan'>
             Les meilleurs experts
             en nettoyage à votre 
             service 
            </h1>
            <h2 className='second-slogan'>L'hygiène de votre éspace n'est plus un souci</h2>
           <Link to="/About"><div className='a-propos-btn'>à propos</div></Link>   
        </div>
        <div>
            <img src={worker} alt="worker" className='worker-img' />
        </div>
    </section>

    <div className='separateur'>
      <h1>Ils sont satisfaits de leurs collaboration avec nous</h1>
      <h2>Quelques avis sur CoNet</h2>
      <div className='triangle'></div>
    </div>

    <section className='comments'>
      <CommentItem />
      <CommentItem />
      <CommentItem /> 
    </section>

    <Footer />
     
  </div>
  )
}

export default Home