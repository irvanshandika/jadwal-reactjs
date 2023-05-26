import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JadwalList from "./components/JadwalList.js";
import AddJadwal from "./components/AddJadwal.js";
import EditJadwal from "./components/EditJadwal.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JadwalList />} />
          <Route path="/add" element={<AddJadwal />} />
          <Route path="/edit/:id" element={<EditJadwal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
