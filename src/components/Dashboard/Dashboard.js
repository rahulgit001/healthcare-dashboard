import React from "react";
import "./Dashboard.css";
import bodyImg from "../../assets/human.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import ActivityChart from "../Activity/ActivityStaticGraph";
import { TbLungsFilled } from "react-icons/tb";


const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Top Bar */}
      <div className="dashboard-header">
        <input type="text" placeholder="Search" className="search-bar" />
        <span className="notification-icon">🔔</span>
      </div>

      {/* Title */}
      {/* <h2 className="title">Dashboard</h2> */}
      <h2 className="dashboard-title">
        Dashboard
        <span className="dropdown-icon">This Week<RiArrowDropDownLine />   </span>
      </h2>

      {/* Body Section */}
      <div className="dashboard-body">
        {/* Anatomy Model */}
        <div className="anatomy-section">
          <div className="anatomy-container">
            <img src={bodyImg} alt="Anatomy" className="anatomy-image" />
            <button className="tag heart">❤️ Healthy Heart</button>
            <button className="tag leg">🦵 Healthy Leg</button>
          </div>
        </div>

        {/* Health Stats */}
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
              <span role="img" aria-label="teeth">
                🦷
              </span>{" "}
              Teeth
            </div>
            <p className="stat-date">Date: 26 Okt 2021</p>
            <div className="progress green"></div>
          </div>

          <div className="stat-card">
            <div className="stat-title">
              <span role="img" aria-label="bone">
                🦴
              </span>{" "}
              Bone
            </div>
            <p className="stat-date">Date: 26 Okt 2021</p>
            <div className="progress red"></div>
          </div>

          <a href="#" className="details-link">
            Details →
          </a>
        </div>
      </div>

      {/* Activity Section
      <div className="activity-section">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
        <div className="activity-chart">
          {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="day-bar">
              <div className="bar bar-primary"></div>
              <div className="bar bar-secondary"></div>
              <p className="day-label">{day}</p>
            </div>
          ))}
        </div>
      </div> */}
      <ActivityChart />
    </div>
  );
};

export default Dashboard;
