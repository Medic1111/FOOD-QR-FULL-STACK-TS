import React from "react";
import Specific from "./pages/Specific";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Specific />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
