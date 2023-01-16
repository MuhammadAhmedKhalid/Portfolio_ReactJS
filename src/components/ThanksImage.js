import React from 'react'
import './HeroImageStyles.css'
import TyImg from '../assets/ty-img.jpg'
import CorrectImg from '../assets/correct-img.png'

function ThanksImage() {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='final-img' src={TyImg} alt='TyImg' />
            </div>
            <div className='content'>
                <img src={CorrectImg} alt='CorrectImg' />
                <h1>Thank you!</h1>
                <p>Please check your email for confirmation.</p>
            </div>
        </div>
    )
}

export default ThanksImage