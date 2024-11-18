import React from "react";
import { useNavigate } from "react-router-dom";
import "./Week1.css";

const Week1 = () => {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path); 
    };

    const goToPreviousSchedule = () => {
        navigate("/ScheduleTable");
      };

    const weeks = [
        { name: "Saturday, 1 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Sunday, 2 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Monday, 3 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Tuesday, 4 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Wednesday, 5 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Thursday, 6 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
        { name: "Friday, 7 October", dates: ["00:00", "06:00", "12:00", "18:00"] },
    ];

    
    const isGrayColumn = (date) => {
        return date === "00:00" || date === "12:00";
    };

    const layerData = {
        "Saturday, 1 October": {
            "12:00": "Jack A", 
        },
        "Sunday, 2 October": {
            "12:00": "John M",
        },
        "Monday, 3 October": {
            "12:00": "Jack A",
        },
        "Tuesday, 4 October": {
            "12:00": "John M",
        },
        "Wednesday, 5 October": {
            "12:00": "Jack A",
        },
        "Thursday, 6 October": {
            "12:00": "John M",
        },
        "Friday, 7 October": {
            "12:00": "Jack A",
        },
    };

   
    const getCellClass = (data) => {
        if (data === "Jack A") {
            return "jack-a"; 
        } else if (data === "John M") {
            return "john-m"; 
        }
        return ""; 
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
                    <div colSpan="25">1st Oct 2022 - 7th Oct 2022</div>
                </div>
            </div>

            {/* Schedule Table */}
            <table className="schedule-table">
                <thead>
                    {/* Week Row */}
                    <tr className="week-row">
                        <th className="header"></th>
                        {weeks.map((week, index) => (
                            <th
                                key={index}
                                colSpan={week.dates.length}
                                className="week-header"
                            >
                                {week.name}
                            </th>
                        ))}
                    </tr>
                    {/* Date Row */}
                    <tr className="date-row">
                        <th className="header">Time</th>
                        {weeks.flatMap((week) =>
                            week.dates.map((date, index) => (
                                <th
                                    key={index}
                                    className={`date-header ${isGrayColumn(date) ? "gray-column" : ""}`}
                                >
                                    {date}
                                </th>
                            ))
                        )}
                    </tr>
                </thead>
                <tbody>
                    {/* Table Layers */}
                    {["Layers", "Layer 1", "Layer 2", "Override Layer", "Final Schedule"].map((layer, layerIndex) => (
                        <tr key={layerIndex}>
                            <td className="row-header">{layer}</td>
                            {weeks.flatMap((week) =>
                                week.dates.map((date, dateIndex) => {
                                    
                                    let cellData = "";
                                    if (layer === "Layer 1" || layer === "Final Schedule") {
                                        cellData = layerData[week.name] && layerData[week.name][date] ? layerData[week.name][date] : "";
                                    }

                                    return (
                                        <td
                                            key={`${layer}-${week.name}-${dateIndex}`}
                                            className={`empty-cell ${isGrayColumn(date) ? "gray-column" : ""} ${getCellClass(cellData)}`}
                                        >
                                            {cellData}
                                        </td>
                                    );
                                })
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Week1;
