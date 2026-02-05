import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>Why Choose NovaTech?</h2>
            <p>
              We're more than just a dev shop. We're your strategic technology
              partner. Our team of experts is dedicated to delivering excellence
              in every line of code.
            </p>
            <ul className="feature-list">
              <li>
                <CheckCircle2 className="text-accent" size={20} /> 24/7
                dedicated support
              </li>
              <li>
                <CheckCircle2 className="text-accent" size={20} /> Top 1%
                engineering talent
              </li>
              <li>
                <CheckCircle2 className="text-accent" size={20} /> AI-first
                approach
              </li>
            </ul>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10M+</span>
              <span className="stat-label">Users Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
