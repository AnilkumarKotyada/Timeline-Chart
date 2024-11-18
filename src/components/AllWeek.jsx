import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllWeek.css";

const AllWeek = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const goToPreviousSchedule = () => {
        navigate("/ScheduleTable");
    };

    const weeks = [
        { name: "Week 39", dates: ["1", "2"] },
        { name: "Week 40", dates: ["3", "4", "5", "6", "7", "8", "9"] },
        { name: "Week 41", dates: ["10", "11", "12", "13", "14", "15", "16"] },
        { name: "Week 42", dates: ["17", "18", "19", "20", "21", "22", "23"] },
        { name: "Week 43", dates: ["24", "25", "26", "27", "28", "29", "30"] },
        { name: "Week 44", dates: ["31"] },
    ];

    const getCellContentAndClass = (date) => {
        const dayNumber = parseInt(date);
        if (dayNumber % 2 === 1) {
            return { name: "Jack A", className: "jack-a-cell" };
        } else {
            return { name: "John M", className: "john-m-cell" };
        }
    };

    const isEvenDate = (date) => parseInt(date) % 2 === 0;

    return (
        <div className="schedule-container">
            <div className="top-bar">
                <div className="left-buttons">
                    <button className="top-bar-button">Today</button>
                    <button className="top-bar-button" onClick={goToPreviousSchedule}>
                        Previous
                    </button>
                    <button className="top-bar-button">Next</button>
                </div>
                <div className="right-buttons">
                    <button className="top-bar-button" onClick={() => handleNavigation("/ScheduleOneDay")}>1 Day</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Day2")}>2 Day</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Week1")}>1 Week</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/Week2")}>2 Week</button>
                    <button className="top-bar-button" onClick={() => handleNavigation("/MonthOne")}>1 Month</button>
                </div>
            </div>

            <div>
                <div className="top-year">
                    <div colSpan="25">Oct 2022</div>
                </div>
            </div>

            <table className="schedule-table">
                <thead>
                    <tr className="week-row">
                        <th className="header"></th>
                        {weeks.map((week, index) => (
                            <th key={index} colSpan={week.dates.length} className="week-header">
                                {week.name}
                            </th>
                        ))}
                    </tr>
                    <tr className="date-row">
                        <th className="header">Date</th>
                        {weeks.flatMap((week) =>
                            week.dates.map((date, index) => (
                                <th key={index} className="date-header">
                                    {date}
                                </th>
                            ))
                        )}
                    </tr>
                </thead>
                <tbody>
                    {["layers", "Layer 1", "Layer 2", "Override Layer", "Final Schedule"].map(
                        (layer, layerIndex) => (
                            <tr key={layerIndex}>
                                <td className="row-header">{layer}</td>
                                {weeks.flatMap((week) =>
                                    week.dates.map((date, index) => {
                                        if (layer === "Layer 1") {
                                            const { name, className } = getCellContentAndClass(date);
                                            return (
                                                <td
                                                    key={`${layer}-${date}`}
                                                    className={`empty-cell ${className}`}
                                                    style={{
                                                        backgroundColor:
                                                            className === "jack-a-cell"
                                                                ? "orange"
                                                                : className === "john-m-cell"
                                                                    ? "black"
                                                                    : isEvenDate(date)
                                                                        ? "gray"
                                                                        : "white",
                                                        color:
                                                            className === "jack-a-cell" || className === "john-m-cell"
                                                                ? "white"
                                                                : "black",
                                                    }}
                                                >
                                                    {name}
                                                </td>
                                            );
                                        }
                                        if (layer === "Layer 2") {
                                            // Add "Richard M" data for the specified dates
                                            if (
                                                (date === "9" && week.name === "Week 40") ||
                                                (date === "10" && week.name === "Week 41") ||
                                                (date === "11" && week.name === "Week 41") ||
                                                (date === "16" && week.name === "Week 41") ||
                                                (date === "17" && week.name === "Week 42") ||
                                                (date === "18" && week.name === "Week 42") ||
                                                (date === "23" && week.name === "Week 42") ||
                                                (date === "24" && week.name === "Week 43") ||
                                                (date === "25" && week.name === "Week 43") ||
                                                (date === "30" && week.name === "Week 43") ||
                                                (date === "31" && week.name === "Week 44")
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell richard-m-cell"
                                                        style={{
                                                            backgroundColor: "purple",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Richard M
                                                    </td>
                                                );
                                            }

                                            // Default empty cell
                                            return (
                                                <td
                                                    key={`${layer}-${date}`}
                                                    className="empty-cell"
                                                    style={{
                                                        backgroundColor: isEvenDate(date) ? "gray" : "white",
                                                    }}
                                                ></td>
                                            );
                                        }

                                        if (layer === "Override Layer") {
                                            // Add "Jack A" for Week 41 Dates 14 to 16 and Week 42 Date 17
                                            if (
                                                (week.name === "Week 41" && (date === "14" || date === "15" || date === "16")) ||
                                                (week.name === "Week 42" && date === "17")
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell jack-a-cell"
                                                        style={{
                                                            backgroundColor: "orange",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Jack A
                                                    </td>
                                                );
                                            }

                                            // Default empty cell for Override Layer
                                            return (
                                                <td
                                                    key={`${layer}-${date}`}
                                                    className="empty-cell"
                                                    style={{
                                                        backgroundColor: isEvenDate(date) ? "gray" : "white",
                                                    }}
                                                ></td>
                                            );
                                        }

                                        if (layer === "Final Schedule") {
                                            // Add names for specific dates in the Final Schedule
                                            if (
                                                (week.name === "Week 39" && date === "1") ||
                                                (week.name === "Week 39" && date === "2")
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor: date === "1" ? "orange" : "black",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {date === "1" ? "Jack A" : "John B"}
                                                    </td>
                                                );
                                            }

                                            if (
                                                (week.name === "Week 40" && date === "3") ||
                                                (week.name === "Week 40" && date === "4") ||
                                                (week.name === "Week 40" && date === "5") ||
                                                (week.name === "Week 40" && date === "6") ||
                                                (week.name === "Week 40" && date === "7") ||
                                                (week.name === "Week 40" && date === "8") ||
                                                (week.name === "Week 40" && date === "9")
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor:
                                                                date === "3" || date === "5" || date === "7" ? "orange" : "black",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {date === "3" || date === "5" || date === "7"
                                                            ? "Jack A"
                                                            : date === "4" || date === "8"
                                                                ? "John M"
                                                                : "Richard M"}
                                                    </td>
                                                );
                                            }

                                            if (
                                                (week.name === "Week 41" && (date === "11" || date === "12" || date === "13" || date === "14" || date === "15" || date === "16"))
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor: "orange",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {date === "11" || date === "14" || date === "15" || date === "16"
                                                            ? "Jack A"
                                                            : date === "12"
                                                                ? "John M"
                                                                : "Richard M"}
                                                    </td>
                                                );
                                            }

                                            if (
                                                (week.name === "Week 42" && (date === "17" || date === "18" || date === "19" || date === "20" || date === "21" || date === "22" || date === "23"))
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor:
                                                                date === "17" || date === "19" || date === "21" || date === "23"
                                                                    ? "orange"
                                                                    : "black",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {date === "17" || date === "19" || date === "21"
                                                            ? "Jack A"
                                                            : date === "18" || date === "22"
                                                                ? "John M"
                                                                : "Richard M"}
                                                    </td>
                                                );
                                            }

                                            if (
                                                (week.name === "Week 43" && (date === "24" || date === "25" || date === "26" || date === "27" || date === "28" || date === "29" || date === "30"))
                                            ) {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor: date === "24" || date === "25" || date === "30"
                                                                ? "purple"
                                                                : date === "26" || date === "28" || date === "29"
                                                                    ? "orange"
                                                                    : "black",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {date === "24" || date === "25" || date === "30"
                                                            ? "Richard M"
                                                            : date === "26" || date === "28" || date === "29"
                                                                ? "John M"
                                                                : "Jack A"}
                                                    </td>
                                                );
                                            }

                                            if (week.name === "Week 44" && date === "31") {
                                                return (
                                                    <td
                                                        key={`${layer}-${date}`}
                                                        className="empty-cell"
                                                        style={{
                                                            backgroundColor: "purple",
                                                            color: "white",
                                                        }}
                                                    >
                                                        Richard M
                                                    </td>
                                                );
                                            }

                                            return (
                                                <td
                                                    key={`${layer}-${date}`}
                                                    className="empty-cell"
                                                    style={{
                                                        backgroundColor: isEvenDate(date) ? "gray" : "white",
                                                    }}
                                                ></td>
                                            );
                                        }

                                        return (
                                            <td
                                                key={`${layer}-${date}`}
                                                className="empty-cell"
                                                style={{
                                                    backgroundColor: isEvenDate(date) ? "gray" : "white",
                                                }}
                                            ></td>
                                        );
                                    })
                                )}
                            </tr>
                        )
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default AllWeek;
