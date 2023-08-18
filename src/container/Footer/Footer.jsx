import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => (
  <div className='footer section-padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='footer-links'>
      <div className='footer-links-contact'>
        <h1 className='footer-headtext'>Contact Us</h1>
        <p className='p-opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p-opensans'>+1 212-344-1230</p>
        <p className='p-opensans'>+1 212-555-1230</p>
      </div>

      <div className='footer-links-logo'>
        <img src={images.gericht} alt="footer-logo" />
        <p className='p-opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt='spoon' style={{ marginTop: 15 }} />
        <div className='footer-links-icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='footer-links-work'>
        <h1 className='footer-headtext'>Working Hours</h1>
        <p className='p-opensans'>Monday-Friday:</p>
        <p className='p-opensans'>08:00 Am - 12:00 Am</p>
        <p className='p-opensans'>Saturday-Sunday:</p>
        <p className='p-opensans'>07:00 Am - 11:00 Pm</p>
      </div>
    </div>

    <div className='footer-copyright'>
      <p className='p-opensans'>2021 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
