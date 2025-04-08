'use client';

import { useRouter } from 'next/navigation';
import '../globals.css';

export default function About() {
  const router = useRouter();

  return (
    <div className="about-page">
      <div className="about-header">
        <button className="back-button" onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <div className="designer-image">
            {/* Replace with actual image */}
            <div className="image-placeholder"></div>
          </div>
          <h1>Elissa Harouny</h1>
          <h2>Graphic Designer</h2>
        </div>

        <div className="about-text">
          <div className="about-section">
            <h3>About Me</h3>
            <p>
              As a passionate graphic designer, I blend creativity with technical expertise 
              to create immersive digital experiences. With a keen eye for detail and a love for innovative design, 
              I specialize in crafting websites that not only look beautiful but also tell compelling stories.
            </p>
          </div>

          <div className="about-section">
            <h3>My Approach</h3>
            <p>
              I believe in the power of minimalist design combined with interactive elements that engage users. 
              This website showcases my philosophy of creating seamless experiences where music, motion, and 
              visual design come together to create something unique and memorable.
            </p>
          </div>

          <div className="about-section">
            <h3>Skills & Expertise</h3>
            <ul className="skills-list">
              <li>UI/UX Design</li>
            
              <li>Motion Graphics</li>
              <li>Interactive Design</li>
              <li>Brand Identity</li>
              <li>Creative Direction</li>
            </ul>
          </div>

          <div className="about-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <p>Email: elissa.harouny@example.com</p>
              <div className="social-links">
                <a href="#" className="social-link">Behance</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 