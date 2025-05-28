import React from "react";
import { TbLungsFilled } from "react-icons/tb";
import "./HealthStatusCards.css";

const HealthStatusCards = () => {
  return (
    <div className="health-stats">
      <div className="stat-card">
        <div className="stat-title">
          <span role="img" aria-label="lungs">
            <TbLungsFilled />
          </span>{" "}
          Lungs
        </div>
        <p className="stat-date">Date: 26 Okt 2021</p>
        <div className="progress red"></div>
      </div>

      <div className="stat-card">
        <div className="stat-title">
          <span role="img" aria-label="teeth">🦷</span> Teeth
        </div>
        <p className="stat-date">Date: 26 Okt 2021</p>
        <div className="progress green"></div>
      </div>

      <div className="stat-card">
        <div className="stat-title">
          <span role="img" aria-label="bone">🦴</span> Bone
        </div>
        <p className="stat-date">Date: 26 Okt 2021</p>
        <div className="progress red"></div>
      </div>

      <a href="#" className="details-link">
        Details →
      </a>
    </div>
  );
};

export default HealthStatusCards;
