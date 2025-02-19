import React from "react";
import { useNavigate } from "react-router-dom";
import "./ScheduleOneDay.css" 

const ScheduleOneDay = () => {
    const navigate = useNavigate(); 
  const handleNavigation = (path) => {
    navigate(path); 
  };

  const goToPreviousSchedule = () => {
    navigate("/ScheduleTable");
  };
    return (
        <div className="schedule-container">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="left-buttons">
                    <button className="top-bar-button">Today</button>
                    <button className="top-bar-button" onClick={goToPreviousSchedule}>Previous</button>
                    <button className="top-bar-button">Next</button>
                </div>
                <div className="right-buttons">
                <button className="top-bar-button" onClick={() => handleNavigation("/ScheduleOneDay")}>1 Day</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Day2")}>2 Day</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Week1")}>1 Week</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Week2")}>2 Week</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/AllWeek")}>1 Month</button>
                </div>
            </div>
            <div>
                <div className="top-year">
                    <div colSpan="25">1st Oct 2022</div>
                </div>
            </div>
            {/* Schedule Table */}
            <table className="schedule-table">
                <thead>
                    <tr className="top-date">
                        <th colSpan="25">1st Oct 2022 - Saturday</th>
                    </tr>
                    <tr>
                        <th className="header">Time</th>
                        {[...Array(24).keys()].map((hour) => (
                            <th
                                key={hour}
                                className={`time-slot ${hour % 2 === 0 ? "" : ""}`}
                            >
                                {hour.toString().padStart(2, "0")}:00
                                
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="row-header">layers</td>
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`layer2-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                                
                            ></td>
                        ))}
                    </tr>
                    <tr>
                        <td className="row-header">Layer 1</td>
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`layer1-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                                style={{
                                    backgroundColor: [0, 2, 4, 6, 20, 22].includes(hour)
                                    ? "#d3d3d3"
                                    : (hour >= 8 && hour <= 18 ? "orange" : "transparent"),
                                color: hour >= 8 && hour <= 18 || [0, 2, 4, 6, 20, 22].includes(hour) ? "white" : "inherit",
                                textAlign: hour >= 8 && hour <= 18 || [0, 2, 4, 6, 20, 22].includes(hour) ? "center" : "inherit",
                                padding: "0",   
                                }}>
                                {hour >= 8 && hour <= 18 ? "Jack A" : ""}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="row-header">Layer 2</td>
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`layer2-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                        
                            ></td>
                        ))}
                        
                    </tr>

                    <tr>
                        <td className="row-header">&nbsp;</td> 
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`layer2-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                                
                            ></td>
                        ))}
                    </tr>

                    <tr>
                        <td className="row-header">Override Layer</td>
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`override-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                                
                            ></td>
                        ))}
                    </tr>
                    <tr>
                        <td className="row-header">Final Schedule</td>
                        {[...Array(24).keys()].map((hour) => (
                            <td
                                key={`layer1-${hour}`}
                                className={`empty-cell ${hour % 2 === 0 ? "gray-column" : ""}`}
                                style={{
                                    backgroundColor: [0, 2, 4, 6, 20, 22].includes(hour)
                                      ? "#d3d3d3"
                                      : hour >= 8 && hour <= 18 ? "orange" : "transparent",
                                    color: hour >= 8 && hour <= 18 || [0, 2, 4, 6, 20, 22].includes(hour)
                                      ? "white"
                                      : "inherit",
                                    textAlign: hour >= 8 && hour <= 18 || [0, 2, 4, 6, 20, 22].includes(hour)
                                      ? "center"
                                      : "inherit",
                                    padding: "0",
                                  }}
                                  
                            >
                                {hour >= 8 && hour <= 18 ? "Jack A" : ""}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleOneDay;
