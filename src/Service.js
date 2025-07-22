import React from "react";
import "./Service.css";

import roobot from "./images/roobot.jpg";
import pro from "./images/pro.jpg";
import health from "./images/health.jpg";
import nuts from "./images/nuts.jpg";

const services = [
  {
    title: "AI Chat-bot for Emotional Support",
    desc: "Your always-available AI companion for mental wellness support.",
    image: roobot,
    bg: "card-purple",
  },
  {
    title: "Personalized Wellness Routine Generator",
    desc: "Get a personalized wellness plan for your mood and routine.",
    image: pro,
    bg: "card-white",
  },
  {
    title: "Daily Mental Health Quote",
    desc: "Get daily affirmations, coping tips, and mindfulness cues to stay inspired!",
    image: health,
    bg: "card-white",
  },
  {
    title: "Therapy Booking Platform",
    desc: "Book sessions with certified therapists—your language, your schedule.",
    image: nuts,
    bg: "card-purple",
  },
];

const Service = () => {
  return (
    <section id="services-section">
      <div className="services-header">
        <p className="services-subtitle">SERVICES</p>
        <h1 className="services-title">
          Supporting Your Well-being <br />
          <span className="highlight">Every Step</span>
        </h1>
        <p className="services-description">
          Find trusted support for a peaceful and healthy mind.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.bg}`}>
            <div className="card-body">
              <img src={service.image} alt={service.title} className="card-img" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;