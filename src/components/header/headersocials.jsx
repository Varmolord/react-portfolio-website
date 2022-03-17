import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaArtstation} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
export const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/adam-petrželka-01329a230/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://varmolord.artstation.com" target="_blank" rel="noreferrer"><FaArtstation /></a>
        <a href="https://github.com/Varmolord" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default headersocials