// Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-overlay"></div> {/* Overlay for readability */}
      <div className="home-content"  style={{textAlign: 'left', marginLeft: '-550px' }}>
        <h1>Experienced quality medical services to rely on!</h1>
        <h2>Your health is our priority.</h2>
      </div>
      <footer className="footer1">
      <div className="footer1-container" style={{ backgroundColor: '#000', color: '#fff', width: '80%', margin: '0 auto', padding: '10px 20px', textAlign: 'center' }}>
          <p>&copy; 2024 DoctorApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}

export default Home;