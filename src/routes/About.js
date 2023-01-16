import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading='ABOUT.' text='I am a friendly Front-End Developer.'/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About