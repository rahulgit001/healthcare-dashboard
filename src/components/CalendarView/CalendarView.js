import React from "react";
import { format, addDays, startOfWeek } from "date-fns";
import "./CalendarWeek.css";
import { PiArrowsLeftRightFill } from "react-icons/pi";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdSentimentVerySatisfied } from "react-icons/md";
import Appointments from "./Appointments";

const CalendarWeek = () => {
  const start = startOfWeek(new Date(2021, 9, 25), { weekStartsOn: 1 });
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  const today = new Date("2021-10-26");
  const todayStr = today.toISOString().split("T")[0];

  const timeSlots = ["09:00", "11:00", "14:00"];

  const appointments = [
    {
      day: 1,
      time: "09:00",
      title: "Dentist",
      doctor: "Dr. Cameron Williamson",
      emoji: "🦷",
      color: "#3e3ef3",
      date: "2021-10-26",
    },
    {
      day: 3,
      time: "11:00",
      title: "Physiotherapy Appointment",
      doctor: "Dr. Kevin Djones",
      emoji: "💪",
      color: "#cfd9ff",
      date: "2021-10-28",
    },
  ];

  return (
    <div className="calendar-container">
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

      <Appointments />
    </div>
  );
};

export default CalendarWeek;
