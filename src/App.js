// import React, { useState } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import Header from '../Header/Header';
// import DashboardMainContent from '../DashboardMainContent/DashboardMainContent';
// import CalendarWeek from '../DashboardMainContent/CalendarView/CalendarView';
// import './App.css';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <Header />

//       <button
//         className="sidebar-toggle"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         aria-label="Toggle sidebar"
//       >
//         {sidebarOpen ? 'Close' : 'Menu'}
//       </button>

//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <Sidebar />
//       </div>

//       <div className="main-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
//         <div className="dashboard-content">
//           <DashboardMainContent />
//           <CalendarWeek />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
