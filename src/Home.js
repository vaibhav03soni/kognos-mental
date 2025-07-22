import React from 'react';
import './Home.css'; // Assuming you have a Home.css for styling
import welcome from './images/welcome.jpg'
export default function Home() {
  return (
    
      <section id="welcome-section">
      <div id="welcome-text">
        <h2>Welcome To Kognos</h2>
        <p>Your Mental Wellness Community</p>
        
      </div>
      <div id="welcome-image">
        <img src={welcome} alt="Brain illustration" />
      </div>
    </section>
    
  );
}
