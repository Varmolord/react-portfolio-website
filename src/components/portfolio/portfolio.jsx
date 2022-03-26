import React from 'react'
import './portfolio.css';
import {useState} from 'react'

export const Portfolio = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id="portfolio">      
      <h5>PODÍVEJ SE NA MÉ</h5>
      <h2>PORTFOLIO</h2>

      <div className='container'>
        <div className='portfolio'>

        <div className='portfolio__top'>
          <div className='portfolio__title'>
                <h2>GRAFICKÉ ZAKÁZKY</h2>
          </div>
              <div className='selector__menu'>
                <button className='selector__btn' id="hklwe">HKLWE</button>
                <button className='selector__btn' id="wigleg">Wigleg</button>
                <button className='selector__btn' id="ferness">Ferness</button>
                <button className='selector__btn' id="pixel">Pixel</button>
              </div>
            </div>
        </div>

        <div className='portfolio__show'>
          <div className='portfolio__comissions'>
            <div className='album__hklwe' id="album__hklwe">
              <div className='portfolio__image'>

              </div>
              <div className='portfolio__image'>
              
              </div>
              <div className='portfolio__image'>
              
              </div>
          </div>
          </div>

        </div>

        <div className='portfolio__top'>
          <div className='portfolio__title'>
                <h2>GRAFICKÉ PRÁCE</h2>
          </div>
              <div className='selector__menu'>
                <button className='selector__btn' id="wallpapers">Tapety</button>
              </div>
            </div>
        </div>

        <div className='portfolio__show'>
          <div className='portfolio__works'>

          </div>
        </div>



    </section>
  )
}

export default Portfolio


