import React from "react";
import { Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Zap size={32} />,
    title: "Rapid Development",
    desc: "Accelerate your go-to-market strategy with our agile development methodologies and modern tech stack.",
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
