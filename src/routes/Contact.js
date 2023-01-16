import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImage2 from '../components/HeroImage2'
import NavBar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading='CONTACT.' text="Let's have a chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact