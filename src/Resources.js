import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'Articles & Guides',
    description: 'Practical tips on stress management, mindfulness, and emotional resilience.',
  },
  {
    title: 'Meditation & Relaxation',
    description: 'Audio sessions for guided meditation and breathing exercises.',
  },
  {
    title: 'Webinars & Workshops',
    description: 'Live and recorded sessions with mental health professionals.',
  },
];

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <p className="small-title">Discover & Learn</p>
        <h2>Resources for Your Well-being</h2>
        <p className="subtext">
          Explore expert insights, self-care guides, and tools to support your mental health.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((item, index) => (
          <div className="resource-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="explore-button">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
