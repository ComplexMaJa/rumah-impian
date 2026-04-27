import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const features = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q90QaYtscKBeeMN1H0JVO-BB4OSHIaZZKA&s',
      title: 'Ruang Keluarga',
      subtitle: 'Nyaman dan luas',
      price: 'IDR.50jt'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Kamar Tidur',
      subtitle: 'Rumah minimalist Type-A2',
      price: 'IDR.200jt'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Dapur',
      subtitle: 'Bersih dan rapi',
      price: 'IDR.80jt'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Teras',
      subtitle: 'Sirkulasi udara segar',
      price: 'IDR.30jt'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="features" id="fitur">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">Fitur Rumah</h2>
        </div>
        
        <div className="features__carousel-wrapper">
          <button 
            className="features__nav-btn features__nav-btn--left"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          
          <div className="features__carousel">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`feature-item ${index === activeIndex ? 'feature-item--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="feature-item__image-container">
                  <img src={feature.image} alt={feature.title} className="feature-item__image" />
                  
                  {index === activeIndex && (
                    <div className="feature-item__overlay">
                      <div className="feature-item__content">
                        <h3 className="feature-item__title">{feature.title}</h3>
                        <p className="feature-item__subtitle">{feature.subtitle}</p>
                        <p className="feature-item__price">{feature.price}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="features__nav-btn features__nav-btn--right"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

