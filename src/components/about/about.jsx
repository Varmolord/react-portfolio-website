import React from 'react'
import './about.css';
import {FaPaintBrush} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {SiPython} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {FaCode} from 'react-icons/fa'
import {FaHandsHelping} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import {MdSchool} from 'react-icons/md'
import {MdHeadphones} from 'react-icons/md'

import {MdPhotoSizeSelectActual} from 'react-icons/md'

export const about = () => {
  return (
    <section id="about">
      <h5>ZJISTI VÍCE</h5>
      <h2>O MNĚ</h2>

      <div className='about__container'>

      <div className='about__content'>

        <div className='about__cards'>

        <article className='about__card'>
            <div className='card__icon'>
              <FaPaintBrush/>
            </div>

            <h5>Grafika</h5>
            <small>S grafikou jsem začal zhruba v polovině roku 2015.<p/>Programy které využívám:</small>
            <div className='card__list'>
              <div className='card__list__icon'><SiAdobeillustrator/></div>
              <div className='card__list__icon'><SiAdobephotoshop/></div>
              <div className='card__list__icon'><SiBlender/></div>
            </div>
          </article>

        <article className='about__card'>
            <div className='card__icon'>
              <FaHandsHelping/>
            </div>

            <h5>Zakázky</h5>
            <small>Se zakázkami jsem začal v roce 2019. <p/>Již mám za sebou <a href="#portfolio"><mark>20+</mark></a> úspěšných zakázek.</small>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <FaCode/>
            </div>

            <h5>Programování</h5>
            <small>Programovat jsem začal na konci roku 2018.<p/>Jazyky které využívám:</small>
            <div className='card__list'>
              <div className='card__list__icon'><SiCsharp/></div>
              <div className='card__list__icon'><SiPython/></div>
              <div className='card__list__icon'><DiJavascript1/></div>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <RiComputerFill/>
            </div>

            <h5>Počítač</h5>
            <small>Prozatím mám v celku starší počítač ale momentálně šetřím na nový.</small>
            <div class="about__computer">
            <ul>
              <li>Skříň: <mark>GAMEMAX DRACO XD</mark></li>
              <li>Základní deska: <mark>MSI MS-7641</mark></li>
              <li>Procesor: <mark>AMD FX-6300</mark></li>
              <li>Grafika: <mark>NVIDIA GTX 770 2GB</mark></li>
              <li>Paměť: 1x <mark>8GB DDR3</mark></li>
              <li>Uložiště: <p/>1x <mark>1TB HDD 3.5"</mark><p/>1x <mark>1TB HDD 2.5"</mark><p/>1x <mark>252GB 2.5" SSD</mark></li>
              </ul>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <MdHeadphones/>
            </div>

            <h5>Vybavení</h5>
            <small>Do budoucna se plánuji hodně zlepšit ve svém vybavení.</small>
            <div class="about__computer">
            <ul>
              <li>Klávesnice: <mark>HYPER X ALLOY ELITE</mark></li>
              <li>Sluchátka: <mark>HYPER X CLOUD II</mark></li>
              <li>Myš: <mark>HYPER X PULSEFIRE SURGE</mark></li>
              <li>Mikrofon: <mark>BOYA BY-M1000</mark></li>
              <li>Zvukovka: <mark>BEHRINGER UM2</mark></li>
              <li>Grafický tablet: <mark>ONE BY WACOM</mark></li>
              </ul>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <MdSchool/>
            </div>

            <h5>Studium</h5>
            <small>V roce 2019 jsem nastoupil na střední školu a to do oboru informační technologie s maturitou.<p/>Momentálně uvažuji nad pokračováním studia s vysokou školou.</small>
          </article>

        </div>
      </div>
      </div>
    </section>
  )
}
export default about