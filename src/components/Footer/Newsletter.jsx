import React from 'react';
import SubHeading from "../SubHeading/SubHeading"
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext-cormorant'>
        Subscribe To Our Newsletter
      </h1>
      <p className='p-opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className='newsletter-input flex-center'>
      <input type='email' placeholder='Enter youremail address' />
      <button className='custom-button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
