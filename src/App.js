import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/Dashboard/Dashboard';
import CalendarWeek from './components/Calendar/CalendarWeek';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile sidebar */}
      <div className='mobile-header'>
        <h1 className="sidebar-title">
          <span className="health-colored">Health</span>care.
        </h1>
        <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      </div>
      

      {/* Sidebar */}
      <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className="main-content"
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        <div className="dashboard-content">
          <DashboardMainContent />
          <CalendarWeek />
        </div>
      </div>
    </>
  );
}

export default App;
