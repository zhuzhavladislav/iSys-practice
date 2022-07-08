import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Peoples from "../pages/Peoples";
import People_details from "../component/people_details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/people-details" element={<People_details />} /> *
        </Routes>
      </Router>
    </div>
  );
}

export default App;
