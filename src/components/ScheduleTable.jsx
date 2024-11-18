import React from "react";
import { useNavigate } from "react-router-dom";
import "./ScheduleTable.css";

const ScheduleTable = () => {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path); 
    };
    const weeks = [
        { name: "Week 26", dates: ["1", "2", "3"] },
        { name: "Week 27", dates: ["4", "5", "6", "7", "8", "9", "10"] },
        { name: "Week 28", dates: ["11", "12", "13", "14", "15", "16", "17"] },
        { name: "Week 29", dates: ["18", "19", "20", "21", "22", "23", "24"] },
        { name: "Week 30", dates: ["25", "26", "27", "28", "29", "30", "31"] },
    ];

   
    const isGrayColumn = (date) => parseInt(date) % 2 !== 0;

    return (
        <div className="schedule-container">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="left-buttons">
                    <button className="top-bar-button">Today</button>
                    <button className="top-bar-button">Previous</button>
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
                    <div colSpan="25">Jul 2022</div>
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
                        <th className="header">Date</th>
                        {weeks.flatMap((week) =>
                            week.dates.map((date, index) => (
                                <th
                                    key={index}
                                    className={`date-header ${
                                        isGrayColumn(date) ? "gray-column" : ""
                                    }`}
                                >
                                    {date}
                                </th>
                            ))
                        )}
                    </tr>
                </thead>
                <tbody>
                    {/* Table Layers */}
                    {["Layers", "Layer 1", "Layer 2", "", "Override Layer", "Final Schedule"].map(
                        (layer, layerIndex) => (
                            <tr key={layerIndex}>
                                <td className="row-header">{layer}</td>
                                {weeks.flatMap((week) =>
                                    week.dates.map((date, dateIndex) => (
                                        <td
                                            key={`${layer}-${week.name}-${dateIndex}`}
                                            className={`empty-cell ${
                                                isGrayColumn(date) ? "gray-column" : ""
                                            }`}
                                        ></td>
                                    ))
                                )}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
