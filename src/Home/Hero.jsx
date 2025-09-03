import "./Hero.css";
import React, { useRef, useState, useEffect } from "react";

function Hero() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="premium-hero-main">
      <div className={`premium-hero-section ${isVisible ? "animate-in" : ""}`}>
        {/* Animated Background Elements */}
        <div className="hero-background">
          <div className="gradient-orbs">
            <div
              className="orb orb-1"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${
                  mousePosition.y * 20
                }px)`,
              }}
            ></div>
            <div
              className="orb orb-2"
              style={{
                transform: `translate(${mousePosition.x * -15}px, ${
                  mousePosition.y * -15
                }px)`,
              }}
            ></div>
            <div
              className="orb orb-3"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${
                  mousePosition.y * 10
                }px)`,
              }}
            ></div>
          </div>
          <div className="grid-overlay"></div>
          <div className="particles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="hero-content-wrapper">
          {/* Left Content */}
          <div className="hero-text-content">
            <div className="welcome-section">
              <div className="welcome-badge">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Welcome to</span>
              </div>
              <h1 className="hero-title">
                <span className="title-line-1">MONEY</span>
                <span className="title-line-2">MATTERS</span>
              </h1>
            </div>

            <div className="subtitle-section">
              <div className="institution-text">
                The Financial Club Of IIIT Naya Raipur
              </div>
              <div className="tagline">
                Where <span className="highlight-text">Education</span> Meets{" "}
                <span className="highlight-text">Financial Empowerment</span>
              </div>
            </div>

            <div className="collaboration-section">
              <div className="collab-header">
                <span className="collab-text">IN COLLABORATION WITH</span>
              </div>
              <div className="zerodha-container">
                <img
                  src="./Zerodha_logo_1.png"
                  alt="Zerodha"
                  className="zerodha-logo"
                />
                <div className="partnership-badge">
                  <span>Trusted Partner</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="primary-cta">
                <span>Start Your Journey</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="secondary-cta"
                onClick={() => scrollToSection("about-section")}
              >
                <span>Learn More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14" />
                  <path d="M19 12l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Stats Section */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="hero-visual-content">
            <div className="visual-container">
              <div className="main-visual">
                <img
                  src="https://res.cloudinary.com/dapu22gee/image/upload/v1756196444/posters/isneobtsbk3e9hvjoxw5.jpg"
                  alt="Money Matters Visual"
                  className="hero-theme-image"
                />
                <div className="image-glow"></div>
              </div>

              {/* Floating Cards */}
              <div className="floating-cards">
                <div className="float-card card-investment">
                  <div className="card-icon">📈</div>
                  <div className="card-content">
                    <span className="card-title">Smart Investing</span>
                    <span className="card-desc">Learn market strategies</span>
                  </div>
                </div>

                <div className="float-card card-finance">
                  <div className="card-icon">💰</div>
                  <div className="card-content">
                    <span className="card-title">Financial Planning</span>
                    <span className="card-desc">Build your future</span>
                  </div>
                </div>

                <div className="float-card card-education">
                  <div className="card-icon">🎓</div>
                  <div className="card-content">
                    <span className="card-title">Expert Education</span>
                    <span className="card-desc">World-class learning</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="decorative-elements">
                <div className="deco-circle circle-1"></div>
                <div className="deco-circle circle-2"></div>
                <div className="deco-line line-1"></div>
                <div className="deco-line line-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-animation">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
