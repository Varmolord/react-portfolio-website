import React from 'react'
import './experience.css';

import {FaCheckCircle} from 'react-icons/fa'

export const experience = () => {
  return (
    <section id="experience">
      <h5>JAKÉ MÁM</h5>
      <h2>ZKUŠENOSTI</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Vysoce pokročilý</small> 
              </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Středně pokročilý</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Středně pokročilý</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>C#</h4>
                    <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
          <article className='experience__details'>
          <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Vysoce pokročilý</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>MongoDB</h4>
                    <small className='text-light'>Středně pokročilý</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Vysoce pokročilý</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Středně pokročilý</small> 
                  </div>
            </article>        
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>Bash</h4>
                  <small className='text-light'>Začátečník</small> 
                  </div>
            </article>         
            </div>
        </div>
        <div className="experience__graphics">
          <h3>Grafika</h3>
          <div className="experience__content">
          <article className='experience__details'>
          <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Adobe Photoshop</h4>
                    <small className='text-light'>Středně pokročilý</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                    <h4>Adobe Illustrator</h4>
                    <small className='text-light'>Středně pokročilý</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>Blender</h4>
                  <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
            <article className='experience__details'>
                  <FaCheckCircle className='experience__details-icon'/>
                  <div>
                  <h4>Cinema4D</h4>
                  <small className='text-light'>Zkušený</small> 
                  </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}
export default experience