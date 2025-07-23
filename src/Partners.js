import React from 'react';
import './Partners.css';
import wealthsimple from './images/wealthsimple1.png';
import notion from './images/notions.png';
import medium from './images/mediums.png';
import braze from './images/braze.jpg'
import sons from'./images/sons.png';

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <span className="partners-title">Our Partners</span>
        <img src={wealthsimple} alt="Wealthsimple" />
        <img src={notion} alt="Notion" />
        <img src={medium} alt="Medium" />
        <img src={braze} alt="Braze" />
        <img src={sons} alt="Sonos" />
      </div>
    </section>
  );
};

export default Partners;
