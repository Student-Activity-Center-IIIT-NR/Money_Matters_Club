import React, { useState } from "react";

// Custom Icons (since we're not using external dependencies)
const ClipboardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
);

const TrendingIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
    <polyline points="16,7 22,7 22,13" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LightbulbIcon = () => (
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
);

// Premium Bento Grid Item Component
const PremiumBentoItem = ({ item, index, onHover, isHovered }) => {
  const isLarge = index === 3 || index === 6;

  return (
    <div
      className={`premium-bento-item ${isLarge ? "large-item" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background Image */}
      <div className="item-image-container">
        <img src={item.image} alt={item.title} className="item-image" />
        <div className="image-overlay"></div>
        <div className="green-glow"></div>
      </div>

      {/* Content */}
      <div className="item-content">
        <div className="item-header">
          <div className="item-icon">{item.icon}</div>
          <div className="premium-badge">
            <span className="badge-text">Premium</span>
          </div>
        </div>

        <div className="item-text">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-description">{item.description}</p>
        </div>

        <div className="item-footer">
          <div className="learn-more">
            <span>Learn More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="hover-border"></div>
      <div className="corner-accents">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </div>
  );
};

// Main Bento Grid Component
export default function PremiumBentoGrid() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      title: "Empowering Financial Minds",
      description:
        "Learn from the finest financial leaders and transform your investment strategy.",
      icon: <ClipboardIcon />,
      image: "/Gallery/15.JPG",
    },
    {
      title: "Leaders in Finance",
      description:
        "Expert insights and proven strategies for sustainable financial growth.",
      icon: <ChartIcon />,
      image: "/Gallery/16.JPG",
    },
    {
      title: "Wealth Wisdom Talks",
      description:
        "Exclusive sessions guiding you toward complete financial freedom.",
      icon: <TrendingIcon />,
      image: "/Gallery/17.JPG",
    },
    {
      title: "Inspire. Learn. Grow.",
      description:
        "Join our elite community empowering tomorrow's financial leaders through innovation and knowledge.",
      icon: <StarIcon />,
      image: "/Gallery/21.JPG",
    },
    {
      title: "Money Matters Here",
      description:
        "Premium knowledge that transforms wealth and creates lasting prosperity.",
      icon: <BookIcon />,
      image: "/Gallery/22.jpg",
    },
    {
      title: "The Power of Communication",
      description:
        "Master the art of financial communication and network building.",
      icon: <UsersIcon />,
      image: "/Gallery/18.JPG",
    },
    {
      title: "The Pursuit of Knowledge",
      description:
        "Join our exclusive quest for financial understanding, enlightenment, and market mastery that sets you apart.",
      icon: <LightbulbIcon />,
      image: "/Gallery/19.JPG",
    },
  ];

  return (
    <div className="premium-bento-container">
      {/* Header Section */}
      <div className="bento-header">
        <div className="header-badge">
          <span>Premium Experience</span>
        </div>
        <h2 className="main-title">
          Financial Excellence <span className="title-accent">Awaits</span>
        </h2>
        <p className="main-subtitle">
          Discover premium insights and strategies that separate industry
          leaders from the rest
        </p>
      </div>

      {/* Bento Grid */}
      <div className="premium-bento-grid">
        {items.map((item, index) => (
          <PremiumBentoItem
            key={index}
            item={item}
            index={index}
            onHover={setHoveredItem}
            isHovered={hoveredItem === index}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bento-footer">
        <button className="premium-cta">
          <span>Explore All Premium Content</span>
          <div className="cta-glow"></div>
        </button>
      </div>

      <style>{`
        .premium-bento-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 24px;
          background: transparent;
          min-height: auto;
        }

        .bento-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-badge {
          display: inline-block;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.2) 0%,
            rgba(16, 185, 129, 0.2) 100%
          );
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .header-badge span {
          color: #22c55e;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .main-title {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .title-accent {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .main-subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .premium-bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .premium-bento-item {
          position: relative;
          height: 320px;
          background: linear-gradient(
            135deg,
            rgba(15, 15, 15, 0.9) 0%,
            rgba(25, 25, 25, 0.9) 100%
          );
          border: 1px solid rgba(34, 197, 94, 0.1);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
        }

        .premium-bento-item.large-item {
          grid-column: span 2;
          height: 380px;
        }

        .premium-bento-item:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(34, 197, 94, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .item-image-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .premium-bento-item:hover .item-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(34, 197, 94, 0.1) 100%
          );
          transition: opacity 0.3s ease;
        }

        .premium-bento-item:hover .image-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(34, 197, 94, 0.2) 100%
          );
        }

        .green-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(
            circle,
            rgba(34, 197, 94, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .premium-bento-item:hover .green-glow {
          opacity: 1;
        }

        .item-content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .item-icon {
          width: 48px;
          height: 48px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #22c55e;
          transition: all 0.3s ease;
        }

        .premium-bento-item:hover .item-icon {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .premium-badge {
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.8) 0%,
            rgba(16, 185, 129, 0.8) 100%
          );
          padding: 4px 12px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          color: black;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .item-text {
          flex: 1;
        }

        .item-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .large-item .item-title {
          font-size: 1.8rem;
        }

        .item-description {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .large-item .item-description {
          font-size: 1.05rem;
        }

        .item-footer {
          margin-top: auto;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #22c55e;
          font-weight: 600;
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .premium-bento-item:hover .learn-more {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.3),
            rgba(16, 185, 129, 0.3)
          );
          background-clip: padding-box;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
          pointer-events: none;
        }

        .premium-bento-item:hover .hover-border {
          opacity: 1;
        }

        .corner-accents {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 4;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #22c55e;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .corner.top-left {
          top: 15px;
          left: 15px;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 8px;
        }

        .corner.top-right {
          top: 15px;
          right: 15px;
          border-left: none;
          border-bottom: none;
          border-top-right-radius: 8px;
        }

        .corner.bottom-left {
          bottom: 15px;
          left: 15px;
          border-right: none;
          border-top: none;
          border-bottom-left-radius: 8px;
        }

        .corner.bottom-right {
          bottom: 15px;
          right: 15px;
          border-left: none;
          border-top: none;
          border-bottom-right-radius: 8px;
        }

        .premium-bento-item:hover .corner {
          opacity: 1;
          transform: scale(1.2);
        }

        .bento-footer {
          text-align: center;
        }

        .premium-cta {
          position: relative;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: black;
          border: none;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .premium-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        }

        .cta-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .premium-cta:hover .cta-glow {
          opacity: 1;
        }

        @media (max-width: 1200px) {
          .premium-bento-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }

          .main-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .premium-bento-container {
            padding: 40px 16px;
          }

          .premium-bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .premium-bento-item.large-item {
            grid-column: span 1;
            height: 320px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .main-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
