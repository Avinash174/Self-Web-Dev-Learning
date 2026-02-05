import React from "react";
import {
  ChevronRight,
  Code,
  Cpu,
  Globe,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const TechBadge = ({ icon: Icon, label }) => (
  <div className="tech-badge">
    <Icon size={16} />
    <span>{label}</span>
  </div>
);

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Building the Future <br />
          <span className="text-gradient">With Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          We transform complex problems into elegant, scalable solutions using
          cutting-edge technology and AI-driven insights.
        </motion.p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Start Project <ChevronRight size={20} />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("services")}
          >
            View Our Work
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="tech-stack-container"
        >
          <p className="text-secondary text-sm mb-4">POWERED BY MODERN STACK</p>
          <div className="tech-badges">
            <TechBadge icon={Code} label="React/Next.js" />
            <TechBadge icon={Server} label="Node & Python" />
            <TechBadge icon={Cpu} label="AI/ML Models" />
            <TechBadge icon={Globe} label="Cloud Native" />
            <TechBadge icon={ShieldCheck} label="Cybersecurity" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
