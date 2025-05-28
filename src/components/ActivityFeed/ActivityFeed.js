import React from 'react';
import './ActivityStaticGraph.css';

const weekData = [
  ['max-teal', 'indigo-gap', 'bottom-gray split','short-gray'], // Mon
['max-teal', 'indigo-gap', 'bottom-gray split','short-gray'],
['max-teal', 'indigo-gap', 'bottom-gray split','short-gray'],
['max-teal', 'indigo-gap', 'bottom-gray split ','short-gray'],
['max-teal', 'indigo-gap', 'bottom-gray split','short-gray'],
['max-teal', 'indigo-gap', 'bottom-gray split','short-gray'],
['max-teal', 'indigo-gap', 'bottom-gray split','short-gray']
]

const ActivityStaticGraph = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h4>Activity</h4>
        <p>3 appointment on this week</p>
      </div>
      <div className="chart">
        {weekData.map((dayBars, dayIndex) => (
          <div className="day" key={dayIndex}>
            <div className="day-bars">
            {dayBars.map((type, i) => {
              if (type.includes('split')) {
                return (
                  <div key={i} className="bar split-bar">
                    <span className="split-top"></span>
                    <span className="split-bottom"></span>
                  </div>
                );
              }
              return <div key={i} className={`bar ${type}`}></div>;
            })}
            </div>
            <div className="day-label">
              {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'][dayIndex]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityStaticGraph;
