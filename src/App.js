import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JadwalList from "./components/JadwalList.js";
import AddJadwal from "./components/AddJadwal.js";
import EditJadwal from "./components/EditJadwal.js";
import Jumbotron from "./page/Jumbotron.js";
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Jumbotron />} />
            <Route path="/jadwal" element={<JadwalList />} />
            <Route path="/add" element={<AddJadwal />} />
            <Route path="/edit/:id" element={<EditJadwal />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
