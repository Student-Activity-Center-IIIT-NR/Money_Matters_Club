import "./Team.css";
import Member from "../Small_Components/Member.jsx";
import Welcome from "../Small_Components/Welcome.jsx";
import React, { forwardRef, useState, useEffect } from "react";

// Team Images
import utsavImg from "../gallery/Utsav'.JPG";
import akanshaImg from "../gallery/Akansha.JPG";
import praveenImg from "../gallery/praveen.jpg";
import dhaneshImg from "../gallery/Dhanesh.JPG";
import srijanImg from "../gallery/Srijan.JPG";
import ekanshImg from "../gallery/Ekansh.JPG";
import kaushalImg from "../gallery/kaushal.JPG";
import manreetImg from "../gallery/Manreet.JPG";
import prakritiImg from "../gallery/Prakriti.JPG";
import gauravImg from "../gallery/gaurav.JPG";

const Team = forwardRef((props, ref) => {
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
      id="team-section"
      ref={ref}
      className={`premium-team-section ${isVisible ? "animate-in" : ""}`}
    >
      {/* Background Elements */}
      <div className="team-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Header */}
      <div className="team-header">
        <div className="team-intro">
          <div className="intro-badge">
            <span>Our Team</span>
          </div>
          <h2 className="section-title">Meet Our Outstanding Members</h2>
          <p className="section-description">
            The passionate individuals who make Money Matters a thriving
            community of financial excellence
          </p>
        </div>
        <Welcome text="TEAM" className="heading" />
      </div>
      {/* Team Grid */}
      <div className="team-members-grid">
        <Member
          source={utsavImg}
          name="Utsav Garg"
          position="Head"
        />
        <Member
          source={akanshaImg}
          name="Aakansha Verma"
          position="Vice Head"
        />
        <Member
          source={praveenImg}
          name="Praveen Bajpai"
          position="Sponsorship"
        />
        <Member
          source={dhaneshImg}
          name="Dhanesh Sharma"
          position="Sponsorship"
        />
        <Member
          source={srijanImg}
          name="Srijan Kapoor"
          position="Sponsorship"
        />
        <Member
          source={ekanshImg}
          name="Ekansh Arohi"
          position="Social Media"
        />
        <Member
          source={kaushalImg}
          name="Kaushal Singh"
          position="Social Media"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/c_crop,ar_9:16/v1756926855/arpan_b8tuyj.jpg"
          name="Arpan Khakha"
          position="Design & Documentation"
        />
        <Member
          source={manreetImg}
          name="Manreet Bhatia"
          position="Design & Documentation"
        />
        <Member
          source={prakritiImg}
          name="Prakriti Thakur"
          position="Marketing"
        />
        <Member
          source={gauravImg}
          name="Gaurav Singh"
          position="Marketing"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756924533/Anjaney_Jha_xuqmom.jpg"
          name="Anjaney Jha"
          position="Operations & Management"
        />
      </div>

      {/* Team Stats */}
      <div className="team-stats">
        <div className="stat-card">
          <span className="stat-number">10+</span>
          <span className="stat-label">Team Members</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">5</span>
          <span className="stat-label">Departments</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Dedication</span>
        </div>
      </div>
    </div>
  );
});

export default Team;
