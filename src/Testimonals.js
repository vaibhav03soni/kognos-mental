import React from "react";
import './Testimonal.css'

const testimonials = [
  {
    name: "Anna R.",
    age: 32,
    text: "Kognos mental wellness made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before.",
  },
  {
    name: "Mark S.",
    age: 41,
    text: "I was struggling with stress and anxiety, but the mindfulness program at Kognos has helped me regain balance. I finally feel like I'm prioritizing my well-being.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Are Saying</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{t.text}”</p>
            <p className="testimonial-name">— {t.name}, Age {t.age}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;