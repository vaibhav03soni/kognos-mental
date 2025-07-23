import React from 'react';
import './TherapySection.css';

const TherapySection = () => {
  return (
    <div id="therapy-section">
      <div className="overlay">
        <h1>What is Therapy?</h1>
        <ul>
          <li>A space to share your thoughts and feelings without judgment.</li>
          <li>An intimate relationship grounded in professional boundaries.</li>
          <li>A connection unlike any you’ve experienced before.</li>
          <li>A collaborative space to gain new perspectives.</li>
          <li>A personalized journey toward growth and healing.</li>
          <li>A truly one-of-a-kind experience, as we often say.</li>
          <li>Aimed at improving your inner ecosystem.</li>
          <li>A way to process emotions and manage your thoughts with clarity.</li>
        </ul>
        <button className="login-btn">Client Login</button>
      </div>
    </div>
  );
};

export default TherapySection;
