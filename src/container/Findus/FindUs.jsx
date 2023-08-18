import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='bg wrapper section-padding' id='contact'>
    <div className='wrapper-info'>
      <SubHeading title="Contact" />
      <h1 className='headtext-cormorant' style={{ marginBottom: "3rem" }}>Find Us</h1>
      <div className='wrapper-content'>
        <p className='p-opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p-cormorant' style={{ color: "#DCCA87", margin: "2rem 0" }}>Opening Hours</p>
        <p className='p-opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className='p-opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>

        <button type="button" className='custom-button' style={{ marginTop: "2rem" }}>Visit Us</button>
      </div>
    </div>

    <div className='wrapper-img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
