import React from 'react';
import { FaBuilding, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Consultation.css';

const Consultation = () => {
  return (
    <section className="consultation" id="kontak">
      <div className="container consultation__container">
        <div className="consultation__content">
          <h2 className="consultation__title">
            Butuh Konsultasi..?<br />
            Silahkan kontak kami<br />
            Kami Siap Membantu
          </h2>
          
          <div className="consultation__info-group">
            <h3 className="consultation__subtitle">Kontak</h3>
            
            <div className="consultation__info-item">
              <FaBuilding className="info-icon" />
              <p>Jl. Pelajar Pejuang 123 Majalaya Bandung<br />Indonesia</p>
            </div>
            
            <div className="consultation__info-item">
              <FaPhoneAlt className="info-icon" />
              <p>022-6545-2041</p>
            </div>
            
            <div className="consultation__info-item">
              <FaEnvelope className="info-icon" />
              <p>rumahimpian@gmail.com</p>
            </div>
          </div>
          
          <div className="consultation__social-group">
            <h3 className="consultation__subtitle">Social Media</h3>
            <div className="consultation__social-links">
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
              </div>
              <span className="social-text">Rumah Impian</span>
            </div>
          </div>
        </div>
        
        <div className="consultation__form-wrapper">
          <form className="consultation__form">
            <h3 className="form-title">ada pertanyaan..?</h3>
            
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Masukan email anda disini.." 
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="Pertanyaan Anda.." 
                className="form-input form-textarea"
                rows="4"
              ></textarea>
            </div>
            
            <button type="button" className="form-submit">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
