import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <FaHome />
            </div>
            <span className="footer__logo-text">Rumah Impian</span>
          </div>
          
          <ul className="footer__nav">
            <li><a href="#branda">Branda</a></li>
            <li><a href="#layanan">Layanan</a></li>
            <li><a href="#fitur">Fitur</a></li>
            <li><a href="#kontak">Kontak</a></li>
            <li><a href="#masuk">Masuk</a></li>
          </ul>
        </div>
        
        <div className="footer__bottom">
          <p>Copyright by Creative Academy All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
