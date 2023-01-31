import React from 'react';
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='position'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem', marginTop: '5px' }} />
                        <div>
                            <p>123 Housing Society.</p>
                            <p>Pakistan.</p>
                        </div>
                    </div>
                    <div className='position'>
                        <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem', marginTop: '5px' }} />
                        <p>1-2323-343-23</p>
                    </div>
                    <div className='position'>
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem', marginTop: '5px' }} />
                        <p>info@gmail.com</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>This is me Muhammad Ahmed. CEO & Founder of Tech2 etc. I enjoy discussing new projects and design challenges.</p>
                    <div className='socials'>
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '2rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '2rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '2rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer