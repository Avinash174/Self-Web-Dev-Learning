import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="text-gradient">Why Choose MindSpire?</h2>
            <p>
              We're more than just a dev shop. We're your strategic technology
              partner. Our team of experts is dedicated to delivering excellence
              in every line of code, ensuring your vision becomes reality.
            </p>
            <ul
              className="feature-list"
              style={{ listStyle: "none", padding: 0 }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircle2 color="var(--accent-secondary)" size={24} />
                <span style={{ fontSize: "1.1rem" }}>
                  24/7 dedicated support
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircle2 color="var(--accent-secondary)" size={24} />
                <span style={{ fontSize: "1.1rem" }}>
                  Top 1% engineering talent
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircle2 color="var(--accent-secondary)" size={24} />
                <span style={{ fontSize: "1.1rem" }}>AI-first approach</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-2">
            <div className="card text-center">
              <span
                className="text-gradient"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                500+
              </span>
              <span className="text-secondary">Projects Delivered</span>
            </div>
            <div className="card text-center">
              <span
                className="text-gradient"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                98%
              </span>
              <span className="text-secondary">Client Retention</span>
            </div>
            <div className="card text-center" style={{ gridColumn: "span 2" }}>
              <span
                className="text-gradient"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                10M+
              </span>
              <span className="text-secondary">Users Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
