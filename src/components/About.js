import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>Who We Are</h1>
        <p>
          We are a dedicated team providing trusted medical services that prioritize your health and well-being. 
          At E-Doctor, we aim to connect patients and doctors seamlessly through cutting-edge technology.
        </p>
      </section>

      <section className="services-section">
        <h1>What We Offer</h1>
        <ul>
          <li>
            <strong>Convenient Appointments:</strong> Schedule appointments with your preferred doctor at your convenience.
          </li>
          <li>
            <strong>Expert Doctors:</strong> Access a network of certified and experienced medical professionals.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Your data is encrypted and handled with utmost care.
          </li>
        </ul>
      </section>

      <section className="vision-section">
        <h1>Our Vision</h1>
        <p>
          To revolutionize healthcare accessibility by leveraging technology to bridge the gap between patients 
          and medical professionals, ensuring quality care for everyone, anytime, anywhere.
        </p>
      </section>
    </div>
  );
}

export default About;
