import React from 'react'
import worker from '../assets/worker.jpg'
import '../styles/Home.css'
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
            <div className='a-propos-btn'>à propos</div>  
        </div>
        <div>
            <img src={worker} alt="worker" className='worker-img' />
        </div>
    </section>
    <div className='separateur'>
      <h1>Ils sont satisfaits de leurs collaboration avec nous</h1>
      <h2>Quelques avis sur ReadyCleanse</h2>
      <div className='triangle'></div>
    </div>
  </div>
  )
}

export default Home