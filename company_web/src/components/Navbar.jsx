import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "/logo.svg";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          <img
            src={logo}
            alt="MindSpire Logo"
            className="logo-icon"
            style={{ borderRadius: "8px" }}
          />
          <span>MindSpire</span>
        </a>

        <div className="nav-links">
          <button className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleScroll("services")}>
            Services
          </button>
          <button className="nav-link" onClick={() => handleScroll("about")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu bg-glass"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <button className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleScroll("services")}>
            Services
          </button>
          <button className="nav-link" onClick={() => handleScroll("about")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={toggleTheme}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
