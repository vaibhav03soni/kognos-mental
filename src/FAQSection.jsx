import React, { useState } from "react";
import "./FAQSection.css";
// Rename your image file to match this
import  fre from "./images/fre.jpg"; // Adjust the path as necessary
const faqs = [
  {
    question: "How do I book a therapy session?",
    answer: "You can book a session by visiting our appointments page and selecting a preferred time slot."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes, we offer both online and offline therapy sessions."
  },
  {
    question: "What’s the difference between therapy and coaching?",
    answer: "Therapy focuses on mental health, while coaching is goal-oriented support."
  },
  {
    question: "Do I need a subscription to access services?",
    answer: "No subscription is required. You can book sessions individually."
  },
  {
    question: "Can I switch therapists if it doesn’t feel the right connection?",
    answer: "Absolutely! Your comfort is our priority, and you can request a change anytime."
  },
  {
    question: "Is my information and session history kept confidential?",
    answer: "Yes, all your information is securely stored and strictly confidential."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <div className="faq-left">
        <h2>Frequently<br />Asked Questions</h2>
        <p>
          Find answers to common questions about our services, therapy, and mental well-being.
        </p>
        <img src={fre} alt="Meditation illustration" />
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              {item.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
