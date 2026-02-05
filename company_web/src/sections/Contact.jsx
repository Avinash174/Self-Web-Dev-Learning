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

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <span>hello@mindspire.tech</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={24} />
                </div>
                <span>101 Innovation Blvd, Silicon Valley, CA</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <span>+1 (415) 555-0123</span>
              </div>
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
              <div className="status-message success fade-in">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="status-message error fade-in">
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
