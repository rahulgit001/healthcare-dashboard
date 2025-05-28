import React, { useState } from "react";
import "./Sidebar.css";
import { AiFillAppstore } from "react-icons/ai";
import {
  FaHistory,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaComments,
  FaQuestionCircle,
  FaCog,
  FaBars,   // Hamburger icon
  FaTimes,  // Close icon
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger toggle button */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h1 className="sidebar-title">
          <span className="health-colored">Health</span>care.
        </h1>

        <div className="sidebar-section">
          <h2 className="sidebar-subtitle">General</h2>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item active">
              <AiFillAppstore className="sidebar-icon" />
              <span>Dashboard</span>
            </li>
            <li className="sidebar-menu-item">
              <FaHistory className="sidebar-icon" />
              <span>History</span>
            </li>
            <li className="sidebar-menu-item">
              <FaCalendarAlt className="sidebar-icon" />
              <span>Calendar</span>
            </li>
            <li className="sidebar-menu-item">
              <FaClipboardList className="sidebar-icon" />
              <span>Appointments</span>
            </li>
            <li className="sidebar-menu-item">
              <FaChartBar className="sidebar-icon" />
              <span>Statistics</span>
            </li>
            <h2 className="sidebar-subtitle">Tools</h2>
            <li className="sidebar-menu-item">
              <FaComments className="sidebar-icon" />
              <span>Chat</span>
            </li>
            <li className="sidebar-menu-item">
              <FaQuestionCircle className="sidebar-icon" />
              <span>Support</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom">
          <li className="sidebar-menu-item">
            <FaCog className="sidebar-icon" />
            <span>Setting</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
