import React, { useState } from 'react';
import { FaBed, FaBath, FaVectorSquare } from 'react-icons/fa';
import HouseModal from './HouseModal';
import './Recommendations.css';

const Recommendations = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Sewa',
      tagColor: 'red',
      beds: 3,
      baths: 4,
      area: '350m',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Sewa',
      tagColor: 'orange',
      beds: 4,
      baths: 4,
      area: '360m',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Property Baru',
      tagColor: 'green',
      beds: 3,
      baths: 4,
      area: '360m',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Sewa',
      tagColor: 'red',
      beds: 3,
      baths: 4,
      area: '350m',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752734-2a0cd4208a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Sewa',
      tagColor: 'red',
      beds: 3,
      baths: 4,
      area: '360m',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      price: 'IDR.200.000.000',
      address: 'Jl. Soekarno Hatta No.1',
      tag: 'Sewa',
      tagColor: 'red',
      beds: 3,
      baths: 4,
      area: '360m',
    }
  ];

  return (
    <section className="recommendations" id="rekomendasi">
      <div className="container">
        <h2 className="recommendations__title">Rekomendasi Rumah Untuk Mu</h2>
        
        <div className="recommendations__grid">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className={`property-card ${selectedProperty?.id === property.id ? 'property-card--active' : ''}`}
              onClick={() => setSelectedProperty(property)}
              style={{ cursor: 'pointer' }}
            >
              <div className="property-card__image-container">
                <img src={property.image} alt="Property" className="property-card__image" />
              </div>
              
              <div className="property-card__content">
                <h3 className="property-card__price">{property.price}</h3>
                <p className="property-card__address">{property.address}</p>
                <div className={`property-card__tag property-card__tag--${property.tagColor}`}>
                  {property.tag}
                </div>
              </div>
              
              <div className="property-card__footer">
                <div className="property-card__feature">
                  <FaBed className="feature-icon" />
                  <div className="feature-text">
                    <span className="feature-value">{property.beds}</span>
                    <span className="feature-label">Kamar Tidur</span>
                  </div>
                </div>
                <div className="property-card__feature">
                  <FaBath className="feature-icon" />
                  <div className="feature-text">
                    <span className="feature-value">{property.baths}</span>
                    <span className="feature-label">Kamar Mandi</span>
                  </div>
                </div>
                <div className="property-card__feature">
                  <FaVectorSquare className="feature-icon" />
                  <div className="feature-text">
                    <span className="feature-value">{property.area}</span>
                    <span className="feature-label">Luas Rumah</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="recommendations__more">
          <a href="#more">Lihat Lainnya..</a>
        </div>
      </div>

      <HouseModal 
        house={selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />
    </section>
  );
};

export default Recommendations;
