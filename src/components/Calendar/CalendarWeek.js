import React from "react";
import { format, addDays, startOfWeek } from "date-fns";
import "./CalendarWeek.css";
import { PiArrowsLeftRightFill } from "react-icons/pi";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdSentimentVerySatisfied } from "react-icons/md";

const CalendarWeek = () => {
  const start = startOfWeek(new Date(2021, 9, 25), { weekStartsOn: 1 }); // Oct 25, 2021
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  const timeSlots = ["09:00", "11:00", "14:00"];

  const appointments = [
    {
      day: 1, // Tuesday
      time: "09:00",
      title: "Dentist",
      doctor: "Dr. Cameron Williamson",
      emoji: "🦷",
      color: "#3e3ef3",
      date: "2021-10-26",
    },
    {
      day: 3, // Thursday
      time: "11:00",
      title: "Physiotherapy Appointment",
      doctor: "Dr. Kevin Djones",
      emoji: "💪",
      color: "#cfd9ff",
      date: "2021-10-28",
    },
  ];

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

  const today = new Date("2021-10-26");
  const todayStr = today.toISOString().split("T")[0];

  const todaysAppointments = appointments.filter(
    (appt) => appt.date === todayStr
  );
  const upcomingAppointments = appointments.filter(
    (appt) => appt.date > todayStr
  );

  return (
    <div className="calendar-container">
      {/* Week Header */}
      <div className="nav-buttons">
        <MdSentimentVerySatisfied />
        <AiFillPlusSquare />
      </div>
      <h2 className="dashboard-title">
        May 2025
        <div className="nav-buttons">
          <PiArrowsLeftRightFill />
        </div>
      </h2>
      <div className="calendar-header">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              format(day, "yyyy-MM-dd") === todayStr ? "today-highlight" : ""
            }`}
          >
            <div className="day-name">{format(day, "EEE")}</div>
            <div className="day-date">{format(day, "dd")}</div>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="calendar-times">
        {timeSlots.map((slot, i) => (
          <div key={i} className="time-row">
            {days.map((_, j) => {
              const appt = appointments.find(
                (a) => a.day === j && a.time === slot
              );
              return (
                <div key={j} className="time-cell">
                  {appt ? (
                    <div
                      className="appointment"
                      style={{
                        backgroundColor: appt.color,
                        color: "#fff",
                        justifyContent: "center",
                      }}
                    >
                      <div className="appointment-time">{appt.time}</div>
                    </div>
                  ) : (
                    <div className="time-label">{slot}</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Schedule Cards */}
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
    </div>
  );
};

export default CalendarWeek;
