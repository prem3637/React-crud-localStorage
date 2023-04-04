import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/show" element={<Show />} />
          <Route path="/edit/:index" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
