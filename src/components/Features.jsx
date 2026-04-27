import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1583847268964-b28ce8f258a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Ruang Keluarga',
      subtitle: 'Nyaman dan luas',
      price: 'IDR.50jt',
      active: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Kamar Tidur',
      subtitle: 'Rumah minimalist Type-A2',
      price: 'IDR.200jt',
      active: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Dapur',
      subtitle: 'Bersih dan rapi',
      price: 'IDR.80jt',
      active: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Teras',
      subtitle: 'Sirkulasi udara segar',
      price: 'IDR.30jt',
      active: false
    }
  ];

  return (
    <section className="features" id="fitur">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">Fitur Rumah</h2>
          <button className="features__btn-all">Lihat Semua... &gt;</button>
        </div>
        
        <div className="features__carousel-wrapper">
          <button className="features__nav-btn features__nav-btn--left">
            <FaChevronLeft />
          </button>
          
          <div className="features__carousel">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`feature-item ${feature.active ? 'feature-item--active' : ''}`}
              >
                <div className="feature-item__image-container">
                  <img src={feature.image} alt={feature.title} className="feature-item__image" />
                  
                  {feature.active && (
                    <div className="feature-item__overlay">
                      <div className="feature-item__content">
                        <h3 className="feature-item__title">{feature.title}</h3>
                        <p className="feature-item__subtitle">{feature.subtitle}</p>
                        <p className="feature-item__price">{feature.price}</p>
                        <button className="feature-item__btn">Lihat Rumah</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button className="features__nav-btn features__nav-btn--right">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
