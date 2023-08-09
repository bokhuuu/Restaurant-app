import React, { useState } from 'react';
import images from "../../constants/images"
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='navbar'>

      <div className='navbar-logo'>
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className='navbar-links'>
        <li className='p-opensans'><a href='#home'>Home</a></li>
        <li className='p-opensans'><a href='#about'>About</a></li>
        <li className='p-opensans'><a href='#menu'>Menu</a></li>
        <li className='p-opensans'><a href='#awards'>Awards</a></li>
        <li className='p-opensans'><a href='#contact'>Contact</a></li>
      </ul>

      <div className='navbar-login'>
        <a href="#login" className='p-opensans'>Log In / Registration</a>
        <div />
        <a href="/" className='p-opensans'>Book Table</a>
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav >
  );
}

export default Navbar;

