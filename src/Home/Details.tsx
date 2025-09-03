import React, { useState } from "react";

// --- Custom Icons ---
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

// --- Grid Item ---
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
      <div className="item-image-container">
        <img src={item.image} alt={item.title} className="item-image" />
        <div className="image-overlay"></div>
        <div className="green-glow"></div>
      </div>

      <div className="item-content">

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

// --- Main Component ---
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

      <div className="bento-footer">
        <button className="premium-cta">
          <span>Explore All Premium Content</span>
          <div className="cta-glow"></div>
        </button>
      </div>

      {/* --- Styles --- */}
      <style>{`
        body { background: #0f0f0f; color: #fff; }
        .premium-bento-container { max-width: 1400px; margin: 0 auto; padding: 80px 24px; }
        .bento-header { text-align: center; margin-bottom: 60px; }
        .header-badge { display: inline-block; background: rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.3); padding:8px 20px; border-radius:50px; margin-bottom:24px; }
        .header-badge span { color:#22c55e; font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:1px; }
        .main-title { font-size:4rem; font-weight:900; margin-bottom:20px; }
        .title-accent { background:linear-gradient(135deg,#22c55e,#16a34a); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .main-subtitle { font-size:1.25rem; color:#9ca3af; max-width:600px; margin:0 auto; line-height:1.6; }
        .premium-bento-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(350px,1fr)); gap:24px; margin-bottom:60px; }
        .premium-bento-item { position:relative; height:320px; background:#111; border:1px solid rgba(34,197,94,0.1); border-radius:20px; overflow:hidden; cursor:pointer; transition:all .4s ease; }
        .premium-bento-item.large-item { grid-column:span 2; height:380px; }
        .premium-bento-item:hover { transform:translateY(-8px) scale(1.02); border-color:rgba(34,197,94,0.4); box-shadow:0 20px 40px rgba(0,0,0,.4); }
        .item-image-container { position:absolute; inset:0; z-index:1; }
        .item-image { width:100%; height:100%; object-fit:cover; transition:transform .6s ease; }
        .premium-bento-item:hover .item-image { transform:scale(1.1); }
        .image-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.55); transition:.3s; }
        .item-content { position:relative; z-index:2; height:100%; padding:28px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,.2) 60%,transparent 100%); }
        .item-title { font-size:1.6rem; font-weight:800; margin-bottom:10px; text-shadow:0 2px 8px rgba(0,0,0,.7); }
        .item-description { color:#e5e7eb; font-size:1rem; line-height:1.6; text-shadow:0 1px 6px rgba(0,0,0,.6); }
        .large-item .item-title { font-size:2rem; }
        .learn-more { opacity:0; transform:translateY(10px); transition:.3s; color:#22c55e; font-weight:600; display:flex; align-items:center; gap:8px; }
        .premium-bento-item:hover .learn-more { opacity:1; transform:translateY(0); }
        .premium-cta { background:linear-gradient(135deg,#22c55e,#16a34a); color:#000; padding:18px 48px; border-radius:50px; font-size:1.1rem; font-weight:700; border:none; cursor:pointer; transition:.3s; }
        .premium-cta:hover { transform:translateY(-2px); box-shadow:0 15px 35px rgba(34,197,94,0.4); }
        @media(max-width:768px){ .main-title{font-size:2.5rem;} .main-subtitle{font-size:1.1rem;} .premium-bento-grid{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
