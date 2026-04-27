import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__pattern hero__pattern--left"></div>
      <div className="hero__pattern hero__pattern--right"></div>

      <div className="container hero__container">
        <div className="hero__content animate-fade-in-up">
          <h1 className="hero__title">
            Membantu Temukan <br /> Rumah Impian.
          </h1>
          <p className="hero__subtitle">
            Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber terpercaya.
          </p>
          <div className="hero__actions">
            <button className="btn-primary">
              Temukan Rumah
            </button>
            <button className="btn-icon">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="hero__image-wrapper">
        <img src="/hero_house.png" alt="Rumah Impian Modern" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;
