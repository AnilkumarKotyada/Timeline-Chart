import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScheduleTable from "./components/ScheduleTable";
import ScheduleOneDay from "./components/ScheduleOneDay"; 
import AllWeek from './components/AllWeek';
import Day2 from "./components/Day2";
import Week1 from './components/Week1';
import Week2 from './components/Week2';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ScheduleTable />} /> 
          <Route path="/ScheduleOneDay" element={<ScheduleOneDay />} />
          <Route path="/ScheduleTable" element={<ScheduleTable />} />
          <Route path="/AllWeek" element={<AllWeek/>} /> 
          <Route path="/Day2" element={<Day2/>} />
          <Route path="/Week1" element={<Week1/>} />
          <Route path="/Week2" element={<Week2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
