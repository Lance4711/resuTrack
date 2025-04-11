import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const body = document.body;

    const toggleClass = () => {
      body.classList.toggle('nav-active');
    };

    const menu = menuRef.current;
    if (menu) {
      menu.addEventListener('click', toggleClass);
    }

    return () => {
      if (menu) {
        menu.removeEventListener('click', toggleClass);
      }
    };
  }, []);

  return (
    <div>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <Link to="/" className="hover-target">
              <span>Resu</span>Track
            </Link>
          </div>
          <div className="nav-but-wrap">
            <div ref={menuRef} className="menu-icon hover-target" role="button" tabIndex="0">
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <Link to="/" className="hover-target">Home</Link>
            </li>
            <li className="nav__list-item">
              <Link to="/login" className="hover-target">Login/SignUp</Link>
            </li>
            <li className="nav__list-item">
              <Link to="/resutrack" className="hover-target">ResuTrack</Link>
            </li>
            <li className="nav__list-item">
              <Link to="/jobs" className="hover-target">Job Finder</Link>
            </li>
            <li className="nav__list-item">
              <Link to="/about" className="hover-target">FAQ/About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
