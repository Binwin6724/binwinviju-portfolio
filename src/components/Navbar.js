import React, { useState } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'achievements', text: 'Achievements' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <nav className='navbar'>
      {/* Logo */}
      <div style={{ cursor: 'pointer' }}>
        <h1 className='navbar-logo'>
          <Link 
            to="home" 
            spy={true}
            smooth={true} 
            duration={500}
            offset={-80}
            activeClass="active"
          >
            Binwin Viju
          </Link>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className='nav-menu'>
        {navItems.map(item => (
          <li key={item.id} style={{ cursor: 'pointer' }}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className='hamburger' onClick={handleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'mobile-menu' : 'mobile-menu active'}>
        {navItems.map(item => (
          <li key={item.id} style={{ cursor: 'pointer' }}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              onClick={handleNav}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
