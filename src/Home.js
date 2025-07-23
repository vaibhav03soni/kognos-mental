import React, { useState, useEffect } from 'react';
import './Home.css';

const sliderImages = [
  'https://unboxedexperiences.com/wp-content/uploads/2023/04/mentalhealth.jpg',
  'https://www.mentalhealthctr.com/wp-content/uploads/2021/12/January-is-Mental-Wellness-Month.jpg',
  'https://www.creativefabrica.com/wp-content/uploads/2022/09/22/meditation-mental-health-nature-logo-Graphics-39050128-1.jpg',
  // Add more image paths if needed
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change image every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="welcome-container">
      <div className="welcome-text">
        <h1>Welcome To Kognos</h1>
        <p>Your Mental Wellness Community</p>
        <button className="join-button">Join</button>
      </div>
      <div className="welcome-image">
        <img src={sliderImages[currentImage]} alt="Mental Wellness" />
      </div>
    </section>
  );
};

export default Home;
