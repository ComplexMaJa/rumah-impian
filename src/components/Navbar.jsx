import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      <div className="navbar container">
        <Link to="/" className="navbar__logo">
          <FaHome className="navbar__logo-icon" />
          <span>Rumah Impian</span>
        </Link>
        
        <ul className="navbar__links">
          <li><Link to="/" className="active">BERANDA</Link></li>
          <li><a href="#layanan">LAYANAN</a></li>
          <li><a href="#fitur">FITUR</a></li>
          <li><a href="#kontak">KONTAK</a></li>
        </ul>

        <div className="navbar__actions">
          {user ? (
            <Link to="/profile" className="navbar__profile">
              <span className="navbar__user-name">{user.name}</span>
              <div className="navbar__avatar-wrapper">
                <img src={user.profilePic} alt="Profile" className="navbar__avatar" />
              </div>
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn-daftar">DAFTAR</Link>
              <Link to="/login" className="btn-masuk-link">
                <button className="btn-masuk">MASUK</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
