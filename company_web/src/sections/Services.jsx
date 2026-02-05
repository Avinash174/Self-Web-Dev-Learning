import React from "react";
import {
  Zap,
  Shield,
  Rocket,
  Smartphone,
  Globe,
  Brain,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    desc: "Modern, responsive, and high-performance web applications built with the latest technologies.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps for Android and iOS that deliver seamless user experiences.",
  },
  {
    icon: <BarChart size={32} />,
    title: "Data Science & Analytics",
    desc: "Transform your raw data into actionable insights with our advanced analytics and visualization services.",
  },
  {
    icon: <Brain size={32} />,
    title: "Machine Learning (AI)",
    desc: "Leverage the power of AI and predictive modeling to automate processes and drive innovation.",
  },
  {
    icon: <Shield size={32} />,
    title: "Secure Infrastructure",
    desc: "Enterprise-grade security built into every layer of your application, ensuring your data remains protected.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your business, handling millions of users without compromising performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            className="text-gradient"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Our Expertise
          </h2>
          <p style={{ fontSize: "1.25rem" }}>
            Comprehensive solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                style={{
                  color: "var(--accent-primary)",
                  marginBottom: "1.5rem",
                  background: "rgba(99, 102, 241, 0.1)",
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
