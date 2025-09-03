import React from "react";
import "./Member.css";

function Member({ source, name, position }) {
  return (
    <div className="premium-member-card">
      <div className="member-image-container">
        <div className="image-frame">
          <img src={source} alt={`${name} - ${position}`} />
          <div className="image-overlay"></div>
        </div>
        <div className="member-border"></div>
      </div>

      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <div className="position-badge">
          <span className="member-position">{position}</span>
        </div>
      </div>

      <div className="member-decoration">
        <div className="decoration-line"></div>
      </div>
    </div>
  );
}

export default Member;
