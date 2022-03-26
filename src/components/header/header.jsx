import React from 'react'
import './header.css';
import CTA from './cta';
import logo from '../../assets/logo.svg'
import Headersocials from './headersocials';
import Headersocialsr from './headersocialsr';
import {useState} from 'react'


export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Headersocials/>
        <Headersocialsr/>

        <a 
      href="#about" 
        >
          <img id="#" src={logo} alt="me" className='logo' />
        </a>
        <h1 className="text-primary">VARMOLORD</h1>
        <h5 className="text-light">GRAFIK, PROGRAMÁTOR & STUDENT </h5>
        <CTA />

      </div>
    </header>
  )
}
export default Header