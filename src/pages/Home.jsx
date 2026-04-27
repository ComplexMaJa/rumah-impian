import React from 'react';
import Hero from '../components/Hero';
import Recommendations from '../components/Recommendations';
import Services from '../components/Services';
import Features from '../components/Features';
import Consultation from '../components/Consultation';

const Home = () => {
  return (
    <>
      <Hero />
      <Recommendations />
      <Services />
      <Features />
      <Consultation />
    </>
  );
};

export default Home;
