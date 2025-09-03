import Welcome from "../Small_Components/Welcome";
import "./About.css";
import React, { forwardRef, useState, useEffect } from "react";

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      id="about-section"
      ref={ref}
      className={`premium-about-section ${isVisible ? "visible" : ""}`}
    >
      {/* Background Design Elements */}
      <div className="background-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="about-main-container">
        {/* Header with Welcome Component */}
        <div className="section-header">
          <Welcome text="ABOUT US" />
          <div className="header-description">
            <p>
              Empowering the next generation of financial leaders through
              education and community
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content-grid">
          {/* Text Content - Left Side */}
          <div className="content-left">
            <div className="story-block">
              <div className="story-header">
                <div className="story-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                At Money Matters IIIT NR, our mission is to simplify the
                complexities of personal finance and investing. We provide a
                collaborative platform where students can access educational
                resources and apply them to real-world financial scenarios.
              </p>
            </div>

            <div className="story-block">
              <div className="story-header">
                <div className="story-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Building Community</h3>
              </div>
              <p>
                Our goal is to foster financial literacy and build a community
                of like-minded individuals passionate about achieving{" "}
                <span className="accent-text">Financial Independence</span> and
                success.
              </p>
            </div>

            <div className="story-block featured-block">
              <div className="story-header">
                <div className="story-icon featured-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2.31-.48 3.47-.86" />
                    <path d="M22 12c0 1.25-.07 2.48-.2 3.68" />
                    <path d="M16 8l6-3v7" />
                  </svg>
                </div>
                <h3>The Path to Financial Freedom</h3>
              </div>
              <p>
                Financial independence means having enough money saved or
                invested so that you can pay for your living expenses without
                needing to work. This allows you to maintain your current
                lifestyle without relying on a job for income.
              </p>

              <div className="highlight-box">
                <div className="highlight-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 21h6" />
                    <path d="M12 17h0" />
                    <path d="M12 3a6 6 0 0 0-6 6c0 1 .2 1.8.5 2.5L8 14h8l1.5-2.5c.3-.7.5-1.5.5-2.5a6 6 0 0 0-6-6Z" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Key Insight</h4>
                  <p>
                    <strong>Financial freedom is not retirement.</strong> When
                    you achieve financial freedom, you can still work, but not
                    for money anymore. This lets you follow your passion instead
                    of just working for finance.
                  </p>
                </div>
              </div>

              <div className="join-cta">
                <h4>Ready to Transform Your Future?</h4>
                <p>
                  Join us and be part of a community that helps you reach
                  financial freedom!
                </p>
                <button className="cta-button">
                  <span>Join Our Community</span>
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
              </div>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="content-right">
            <div className="image-showcase">
              <div className="main-image-container">
                <div className="image-frame">
                  <img
                    src="https://res.cloudinary.com/dapu22gee/image/upload/v1756196444/posters/isneobtsbk3e9hvjoxw5.jpg"
                    alt="Money Matters Team"
                    className="team-image"
                  />
                  <div className="image-border"></div>
                </div>

                <div className="image-info">
                  <div className="info-badge">
                    <span className="badge-text">Money Matters Community</span>
                  </div>
                  <div className="stats-row">
                    <div className="stat">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Students</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Events</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Mentors</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-elements">
                <div className="float-card card-1">
                  <div className="card-icon">📈</div>
                  <span>Investment Insights</span>
                </div>
                <div className="float-card card-2">
                  <div className="card-icon">💰</div>
                  <span>Financial Planning</span>
                </div>
                <div className="float-card card-3">
                  <div className="card-icon">🎯</div>
                  <span>Goal Achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="features-showcase">
          <div className="features-header">
            <h3>Why Choose Money Matters?</h3>
            <p>Discover the pillars that make our community exceptional</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h4>Educational Excellence</h4>
              <p>
                Comprehensive learning materials covering all aspects of
                personal finance and advanced investment strategies.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Vibrant Community</h4>
              <p>
                Connect with passionate peers and experienced mentors who share
                your vision for financial success.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
              </div>
              <h4>Practical Application</h4>
              <p>
                Real-world simulations, case studies, and hands-on investment
                experiences that prepare you for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
