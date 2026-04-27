import React from 'react';
import { FaHome, FaKey, FaBuilding } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Property Baru",
      description: "Rumah impian kini jadi kenyataan. Beli rumah baru dengan fasilitas terbaik dengan lingkungan yang nyaman.",
      icon: <FaHome />,
      active: true,
    },
    {
      id: 2,
      title: "Sewa Rumah",
      description: "Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk tempat tinggal keluarga mu.",
      icon: <FaKey />,
      active: false,
    },
    {
      id: 3,
      title: "Beli Rumah",
      description: "Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari sumber terpercaya.",
      icon: <FaBuilding />,
      active: false,
    }
  ];

  return (
    <section className="services" id="layanan">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">Layanan Kami</h2>
          <p className="services__subtitle">Rumah impian hadir menjadi solusi bagi kamu</p>
        </div>

        <div className="services__grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`service-card ${service.active ? 'service-card--active' : ''}`}
            >
              <div className="service-card__icon">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
