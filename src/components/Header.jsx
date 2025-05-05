

import React from 'react';
import  '../Style/header.css'
import Icon  from './Icon'
import { Link } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    const menu = document.querySelector('.navMenu');
    if (menu) {
      menu.classList.toggle('active');
    }
  }

  return (
    <header>
      <div className="announcement">
        <div className="container">
          Admissions Open. Enroll your child now.
        </div>
      </div>
      <div className="header-container">
        <div className="logo">
          <Icon name="holistic" />
          <h1>Little Learners Academy</h1>
        </div>
        <nav>
          <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/Academics">Academics</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Admissions">Admissions</Link></li>
            <li><Link to="/Student Life">Student Life</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <button className="burger_menu" onClick={toggleMenu}>
            <Icon name="menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
