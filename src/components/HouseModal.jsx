import React, { useState } from 'react';
import { FaBed, FaBath, FaVectorSquare, FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HouseModal.css';

const HouseModal = ({ house, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  if (!house) return null;

  const images = house.images || [house.image];

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="house-modal-overlay" onClick={onClose}>
      <div className="house-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="house-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="house-modal-content">
          <div className="house-modal-gallery">
            <div className="main-image-container">
              <img src={images[currentImgIndex]} alt={house.address} className="main-image" />
              {images.length > 1 && (
                <>
                  <button className="carousel-btn prev" onClick={prevImage}><FaChevronLeft /></button>
                  <button className="carousel-btn next" onClick={nextImage}><FaChevronRight /></button>
                </>
              )}
            </div>
            <div className="thumbnail-strip">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt="thumbnail" 
                  className={currentImgIndex === index ? 'active' : ''} 
                  onClick={() => setCurrentImgIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="house-modal-details">
            <div className="details-header">
              <span className={`house-tag house-tag--${house.tagColor}`}>{house.tag}</span>
              <h2 className="house-price">{house.price}</h2>
              <p className="house-address"><FaMapMarkerAlt /> {house.address}</p>
            </div>
            
            <div className="house-features-grid">
              <div className="feature-item">
                <FaBed />
                <span>{house.beds} Kamar Tidur</span>
              </div>
              <div className="feature-item">
                <FaBath />
                <span>{house.baths} Kamar Mandi</span>
              </div>
              <div className="feature-item">
                <FaVectorSquare />
                <span>{house.area} Luas Rumah</span>
              </div>
              <div className="feature-item">
                <FaCalendarAlt />
                <span>Dibangun: 2022</span>
              </div>
            </div>
            
            <div className="house-description">
              <h3>Deskripsi Properti</h3>
              <p>
                Rumah modern minimalis dengan desain kontemporer yang elegan. 
                Terletak di lokasi strategis dengan akses mudah ke pusat kota. 
                Dilengkapi dengan fasilitas lengkap, sistem keamanan 24 jam, 
                dan lingkungan yang asri serta nyaman untuk keluarga.
              </p>
            </div>
            
            <div className="house-modal-actions">
              <button className="btn-primary">Hubungi Agen</button>
              <button className="btn-secondary">Jadwalkan Kunjungan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;
