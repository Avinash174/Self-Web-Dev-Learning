import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get Started <ChevronRight size={20} />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("services")}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
