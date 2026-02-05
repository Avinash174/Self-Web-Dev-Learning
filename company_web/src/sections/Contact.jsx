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
            <h2>Let's build something amazing together</h2>
            <p>Ready to start your project? Get in touch with us today.</p>

            <div className="info-item">
              <Mail className="text-accent" />
              <span>hello@novatech.com</span>
            </div>
            <div className="info-item">
              <MapPin className="text-accent" />
              <span>123 Innovation Dr, Tech City, TC 94043</span>
            </div>
            <div className="info-item">
              <Phone className="text-accent" />
              <span>+1 (555) 123-4567</span>
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
              <div className="success-message fade-in">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="error-message fade-in">
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
