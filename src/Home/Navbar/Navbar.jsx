import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navstyle.css";

// Modern Menu Icon Component
const ModernMenuIcon = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="ultra-menu-toggle"
    aria-label="Toggle menu"
  >
    <div className={`hamburger-lines ${isOpen ? "open" : ""}`}>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  </button>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle scroll effect with enhanced threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    { text: "Home", url: "/", icon: "🏠" },
    { text: "Events", url: "/Events", icon: "📅" },
    { text: "Team", url: "/Team", icon: "👥" },
    { text: "About", url: "/About", icon: "ℹ️" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (url) => location.pathname === url;

  return (
    <>
      <nav className={`ultra-modern-navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Animated Background */}
        <div className="navbar-background">
          <div
            className="bg-gradient"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          ></div>
          <div className="noise-texture"></div>
        </div>

        <div className="navbar-container">
          {/* Logo with enhanced styling */}
          <Link to="/" className="ultra-navbar-logo">
            <div className="logo-container">
              <div className="logo-bg-effect"></div>
              <img
                src="/Money_Matters.png"
                alt="Money Matters Logo"
                className="logo-image"
              />
              <div className="logo-text-container">
                <span className="logo-primary">Money</span>
                <span className="logo-accent">Matters</span>
                <div className="logo-underline"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="ultra-desktop-menu">
            <div className="nav-items-container">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className={`ultra-nav-item ${
                    isActiveRoute(item.url) ? "active" : ""
                  }`}
                  style={{ "--item-index": index }}
                >
                  <span className="nav-item-bg"></span>
                  <span className="nav-item-text">{item.text}</span>
                  <div className="nav-item-indicator"></div>
                  <div className="nav-item-glow"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-container">
            <ModernMenuIcon
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

      </nav>

      {/* Enhanced Overlay */}
      {isMobileMenuOpen && (
        <div
          className="ultra-mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Ultra Modern Mobile Menu - Moved outside nav for z-index portal effect */}
      <div className={`ultra-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-bg">
          <div className="mobile-bg-pattern"></div>
        </div>

        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <span>Money</span>
              <span className="accent">Matters</span>
            </div>
          </div>

          <div className="mobile-nav-items">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`ultra-mobile-nav-item ${
                  isActiveRoute(item.url) ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ "--mobile-index": index }}
              >
                <span className="mobile-item-icon">{item.icon}</span>
                <span className="mobile-item-text">{item.text}</span>
                <div className="mobile-item-arrow">→</div>
                <div className="mobile-item-bg"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
