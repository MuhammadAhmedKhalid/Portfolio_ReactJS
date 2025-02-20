import React from 'react'
import './HeroImageStyles.css'
import { Link } from 'react-router-dom'
import IntroImg from '../assets/intro-img.jpg'

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className='content'>
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to='/project' className='btn'>PROJECTS</Link>
          <Link to='/contact' className='btn btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage