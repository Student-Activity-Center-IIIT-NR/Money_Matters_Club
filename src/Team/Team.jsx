import "./Team.css";
import Member from "../Small_Components/Member.jsx";
import Welcome from "../Small_Components/Welcome.jsx";
import React, { forwardRef, useState, useEffect } from "react";

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
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756029227/utsav_q0mzc1.jpg"
          name="Utsav Garg"
          position="Head"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756039802/akansha_qqmxae.jpg"
          name="Aakansha Verma"
          position="Vice Head"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756925537/praveen_htygag.jpg"
          name="Praveen Bajpai"
          position="Sponsorship"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040199/dhanesh_g2v0qn.jpg"
          name="Dhanesh Sharma"
          position="Sponsorship"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040196/srijan_xf9lxa.jpg"
          name="Srijan Kapoor"
          position="Sponsorship"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040199/ekansh_j8kndz.jpg"
          name="Ekansh Arohi"
          position="Social Media"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040198/kaushal_v3k7sg.jpg"
          name="Kaushal Singh"
          position="Social Media"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/c_crop,ar_9:16/v1756926855/arpan_b8tuyj.jpg"
          name="Arpan Khakha"
          position="Design & Documentation"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040192/manreet_vobuy1.jpg"
          name="Manreet Bhatia"
          position="Design & Documentation"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756040358/prakriti_tempau.jpg"
          name="Prakriti Thakur"
          position="Marketing"
        />
        <Member
          source="https://res.cloudinary.com/dapu22gee/image/upload/v1756926821/gaurav1_tvht88.jpg"
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
