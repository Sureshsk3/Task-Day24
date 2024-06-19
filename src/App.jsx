import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/Components/Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import All from "./assets/Components/All";
import Fullstack from "./assets/Components/Fullstack";
import DataScience from "./assets/Components/DataScience";
import Cyber from "./assets/Components/Cyber";
import Career from "./assets/Components/Career";

function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fsd-page" element={<Fullstack />} />
          <Route path="/datasci-page" element={<DataScience />} />
          <Route path="/cybersec-page" element={<Cyber />} />
          <Route path="/career-page" element={<Career />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
