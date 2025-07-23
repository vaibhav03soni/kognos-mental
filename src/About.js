import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="mental-health">
      <div className="mental-health-text">
        <p className="subheading">HOW IT WORKS</p>
        <h1>We Help You<br />Prioritize Your<br />Mental Health</h1>
        <p className="description">
          Browse therapists, book a session, and start your healing journey with trusted professionals.
        </p>
        <button className="cta-btn">Find A Therapist</button>
      </div>
      <div className="mental-health-image">
        <img src='https://3.files.edl.io/10ec/20/10/19/162749-95b87ddf-eae5-436c-a278-06f1bbba1019.jpg' alt="Mental Health" />
      </div>
    </section>
  );
};

export default About;
