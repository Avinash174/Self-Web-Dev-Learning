import React, { useState } from "react"; // verifying imports
import { Mail, MapPin, Phone } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="grid grid-2 contact-wrapper">
          <div className="contact-info">
            <h2 className="text-gradient">
              Ready to Ignite Your Next Big Idea?
            </h2>
            <p
              className="text-secondary"
              style={{ fontSize: "1.2rem", marginBottom: "2rem" }}
            >
              Let's collaborate to build intelligent, scalable solutions that
              drive meaningful growth.
            </p>

            <div
              className="info-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.1)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "var(--accent-primary)",
                }}
              >
                <Mail size={24} />
              </div>
              <span style={{ fontSize: "1.1rem" }}>hello@mindspire.tech</span>
            </div>

            <div
              className="info-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.1)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "var(--accent-primary)",
                }}
              >
                <MapPin size={24} />
              </div>
              <span style={{ fontSize: "1.1rem" }}>
                101 Innovation Blvd, Silicon Valley, CA
              </span>
            </div>

            <div
              className="info-item"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.1)",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "var(--accent-primary)",
                }}
              >
                <Phone size={24} />
              </div>
              <span style={{ fontSize: "1.1rem" }}>+1 (415) 555-0123</span>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div
                className="success-message fade-in"
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "#10b981",
                  borderRadius: "8px",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div
                className="error-message fade-in"
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444",
                  borderRadius: "8px",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
