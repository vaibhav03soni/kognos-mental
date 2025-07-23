import React, { useState } from 'react';
import './Testimonal.css'; // Ensure you have a CSS file for styling
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Kognos mental wellness made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before",
    author: "Anna R., 32",
  },
  {
    text: "I was struggling with stress and anxiety, but the mindfulness program at Kognos has helped me regain balance. I finally feel like I'm prioritizing my well-being.",
    author: "Mark S., 41",
  },
  {
    text: "Thanks to Kognos, I now have a healthier approach to my emotional health. The therapy support is excellent!",
    author: "Priya K., 29",
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <h5>TESTIMONIALS</h5>
        <h2>What Our Clients Are Saying</h2>
        <p>
          Positive experiences from users who have benefited from therapy or wellness programs.
        </p>
        <div className="slider-controls">
          <button onClick={prevSlide}><FaArrowLeft /></button>
          <button onClick={nextSlide}><FaArrowRight /></button>
        </div>
      </div>

      <div className="testimonial-right">
        <div className="testimonial-card">
          <p>"{testimonials[index].text}"</p>
          <span>— {testimonials[index].author}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
