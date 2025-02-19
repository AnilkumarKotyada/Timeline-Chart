import React from "react";
import { useNavigate } from "react-router-dom";
import "./Week2.css";

const Week2 = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const goToPreviousSchedule = () => {
        navigate("/ScheduleTable");
    };

    const isGrayColumn = (date) => {
        return date === "00" || date === "12";
    };

    const weeks = [
        { name: "Sat, 1 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Sun, 2 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Mon, 3 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Tue, 4 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Wed, 5 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Thu, 6 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Fri, 7 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Sat, 8 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Sun, 9 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Mon, 10 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Tue, 11 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Wed, 12 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Thu, 13 Oct", dates: ["00", "06", "12", "18"]},
        { name: "Fri, 14 Oct", dates: ["00", "06", "12", "18"]},
    ];

    const layerData = {
        "Layer 1": {
            "Sat, 1 Oct": { "12": "Jack A" },
            "Sun, 2 Oct": { "12": "John M" },
            "Mon, 3 Oct": { "12": "Jack A" },
            "Tue, 4 Oct": { "12": "John M" },
            "Wed, 5 Oct": { "12": "Jack A" },
            "Thu, 6 Oct": { "12": "John M" },
            "Fri, 7 Oct": { "12": "Jack A" },
            "Sat, 8 Oct": { "12": "John M" },
            "Sun, 9 Oct": { "12": "Jack A" },
            "Mon, 10 Oct": { "12": "John M" },
            "Tue, 11 Oct": { "12": "Jack A" },
            "Wed, 12 Oct": { "12": "John M" },
            "Thu, 13 Oct": { "12": "Jack A" },
            "Fri, 14 Oct": { "12": "John M" },
        },
        "Layer 2": {
            "Sun, 9 Oct": { "00": "Richard M", "06": "Richard M", "12": "Richard M", "18": "Richard M" },
            "Mon, 10 Oct": { "00": "Richard M", "06": "Richard M", "12": "Richard M", "18": "Richard M" },
            "Tue, 11 Oct": { "00": "Richard M", "06": "Richard M", "12": "Richard M", "18": "Richard M" },
            
        },
    };

    const getCellData = (layer, weekName, date) => {
        if (layerData[layer]?.[weekName]?.[date]) {
            return layerData[layer][weekName][date];
        }
        return "";
    };

    const getCellClass = (data, isEmpty, date) => {
        if (isEmpty && isGrayColumn(date)) {
            return "gray-column"; 
        }
        if (data === "Jack A") {
            return "jack-a";
        } else if (data === "John M") {
            return "john-m";
        } else if (data === "Richard M") {
            return "richard-m";
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
                    <div colSpan="25">1st Oct 2022 - 14th Oct 2022</div>
                </div>
            </div>

            {/* Schedule Table */}
            <table className="schedule-table">
                <thead>
                    <tr className="week-row">
                        <th className="header"></th>
                        {weeks.map((week, index) => (
                            <th key={index} colSpan={4} className="week-header">{week.name}</th>
                        ))}
                    </tr>
                    <tr className="date-row">
                        <th className="header">Time</th>
                        {weeks.flatMap((week) =>
                            week.dates.map((date, index) => (
                                <th key={index} className="date-header">{date}</th>
                            ))
                        )}
                    </tr>
                </thead>
                <tbody>
                    {["layers", "Layer 1", "Layer 2", "", "Override Layer", "Final Schedule"].map((layer, layerIndex) => (
                        <tr key={layerIndex}>
                            <td className="row-header">{layer}</td>
                            {weeks.flatMap((week) =>
                                week.dates.map((date, dateIndex) => {
                                    const cellData =
                                        layer === "Final Schedule"
                                            ? layerData["Layer 1"]?.[week.name]?.[date] ||
                                              layerData["Layer 2"]?.[week.name]?.[date] ||
                                              ""
                                            : getCellData(layer, week.name, date);

                                    const isEmpty = cellData === ""; 

                                    return (
                                        <td
                                            key={`${layer}-${week.name}-${dateIndex}`}
                                            className={`empty-cell ${getCellClass(cellData, isEmpty, date)}`}
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

export default Week2;