import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about-section">
      <div className="about-left">
        <p className="about-subtitle">HOW IT WORKS</p>
        <h1 className="about-title">
          We Help You<br />
          Prioritize Your<br />
          Mental Health
        </h1>
        <p className="about-description">
          Browse therapists, book a session, and<br />
          start your healing journey with trusted<br />
          professionals.
        </p>
        <button className="about-btn">Find A Therapist</button>
      </div>

      <div className="about-right">
        <img
          src="https://static.vecteezy.com/system/resources/previews/035/104/921/non_2x/woman-feeling-of-depression-for-mental-health-concept-illustration-vector.jpg"
          alt="Mental Health"
        />
      </div>
    </section>
  );
}
