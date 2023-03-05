import React from 'react';
import './Glass.css';

// const element = document.querySelectorAll('.card');

function Card() {
  return (
    <div className="home-cards-bg p-2" style={{ backgroundColor: '#121113' }}>
      <div
        style={{ flex: 'row', height: '100%' }}
        className="container features_section">
        <h1
          style={{
            transform: 'rotate(-90deg)',
            fontWeight: '700',
            fontSize: '100px',
          }}
          className="features_text">
          Features
        </h1>
        <div className="features_list">
          <div className="feature_item">Security</div>
          <div className="feature_item">Scalability</div>
          <div className="feature_item">Tamper Proof</div>
          <div className="feature_item">Something else</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
