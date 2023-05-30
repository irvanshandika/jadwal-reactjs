import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import AddJadwal from "./components/AddJadwal.js";
import EditJadwal from "./components/EditJadwal.js";
import Jumbotron from "./page/Jumbotron.js";
import Dashboard from "./components/dashboard.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Jumbotron />} />
            <Route
              path="/jadwal"
              element={
                <>
                  <Home />
                  {/* <Footer /> */}
                </>
              }
            />
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
