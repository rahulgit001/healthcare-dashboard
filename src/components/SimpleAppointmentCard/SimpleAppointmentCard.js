import React from "react";
import "./CalendarWeek.css";

const Appointments = () => {
  const scheduleData = {
    today: [
      {
        title: "Dentist",
        time: "09:00-11:00",
        doctor: "Dr. Cameron Williamson",
        icon: "🦷",
      },
      {
        title: "Physiotherapy Appointment",
        time: "11:00-12:00",
        doctor: "Dr. Kevin Djones",
        icon: "💪",
      },
    ],
    thursday: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "💉",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
    saturday: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
      },
    ],
  };

  return (
    <div className="container">
      <div className="cards-row">
        {scheduleData.today.map((item, idx) => (
          <div key={idx} className="card top-card">
            <div className="card-title">
              {item.title} <span className="icon">{item.icon}</span>
            </div>
            <div className="card-time">{item.time}</div>
            <div className="card-doctor">{item.doctor}</div>
          </div>
        ))}
      </div>

      <h3 className="heading">The Upcoming Schedule</h3>

      <div className="day-label">On Thursday</div>
      <div className="cards-row">
        {scheduleData.thursday.map((item, idx) => (
          <div key={idx} className="card">
            <div className="card-title">
              {item.title} <span className="icon">{item.icon}</span>
            </div>
            <div className="card-time">{item.time}</div>
          </div>
        ))}
      </div>

      <div className="day-label">On Saturday</div>
      <div className="cards-row">
        {scheduleData.saturday.map((item, idx) => (
          <div key={idx} className="card">
            <div className="card-title">
              {item.title} <span className="icon">{item.icon}</span>
            </div>
            <div className="card-time">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
