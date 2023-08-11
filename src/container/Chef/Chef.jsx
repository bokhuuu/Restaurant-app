import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='bg wrapper section-padding'>
    <div className="wrapper-img wrapper-img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className='wrapper-info'>
      <SubHeading title="Chef's Word" />
      <h1 className="headtext-cormorant">What we believe in</h1>

      <div className='chef-content'>
        <div className='chef-content-quote'>
          <img src={images.quote} alt='quote' />
          <p className='p-opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
        </div>
        <p className='p-opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      </div>

      <div className='chef-sign'>
        <p>Kevin Luo</p>
        <p className="p-opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
