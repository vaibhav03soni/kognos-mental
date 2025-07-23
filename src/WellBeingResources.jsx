import React from "react";
import "./WellBeingResources.css";
import istok from "./images/istok.jpg";
import wealthsimple1 from "./images/wealthsimple1.png";
import notions from "./images/notions.png";
import mediums from "./images/mediums.png";
import braze from "./images/braze.jpg";
import sonos from "./images/sons.png";

const WellBeingResources = () => {
  // const resourceCards = [
  //   {
  //     title: "Articles & Guides",
  //     desc: "Practical tips on stress management,\n mindfulness, and emotional resilience.",
  //   },
  //   {
  //     title: "Meditation & Relaxation",
  //     desc: "Audio sessions for guided meditation and deep breathing exercises.",
  //   },
  //   {
  //     title: "Webinars & Workshops",
  //     desc: "Live and recorded sessions with mental health professionals.",
  //   },
  // ];

  return (
    <section id="wellbeing-container">
      {/* Partner Logos */}
      {/* <div className="partner-section">
        
        <div className="partner-logos">
         <p className="partner-title">Our Partners</p>
          <img src={wealthsimple1} alt="Wealthsimple" />
          <img src={notions} alt="Notion" />
          <img src={mediums} alt="Medium" />
          <img src={braze} alt="Braze" />
          <img src={sonos} alt="Sonos" />
        </div>
      </div> */}

      {/* Resource Heading */}
   /
      {/* Resource Cards */}
      {/* <div className="resources-grid">
        {resourceCards.map((card, index) => (
          <div className="resource-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div> */}

      {/* Community Section */}
      <div className="community-section">
        <div className="community-content">
          <p className="section-label">COMMUNITY</p>
          <h2>You’re Not Alone <br></br>on This Journey</h2>
          <p>
            Connect with others, share experiences, <br></br>and find encouragement in a safe,
     <br></br>       supportive space.
          </p>
          <button className="community-btn">Join The Community</button>
        </div>
        <div className="community-image">
          <img src={istok} alt="Community" />
        </div>
      </div>
    </section>
  );
};

export default WellBeingResources;
