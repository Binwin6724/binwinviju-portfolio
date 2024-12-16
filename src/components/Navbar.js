import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='navbar'>
      {/* Logo */}
      <div>
        <h1 className='navbar-logo'>Binwin Viju</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='desktop-menu'>
        <li className='menu-item'>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='menu-item'>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className='menu-item'>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='menu-item'>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='menu-item'>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='hamburger'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'mobile-menu' : 'mobile-menu hidden'}>
        <li className='mobile-menu-item'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='mobile-menu-item'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className='mobile-menu-item'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='mobile-menu-item'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='mobile-menu-item'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
