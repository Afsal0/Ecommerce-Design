import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SampleLayout from "./SampleLayout";

export default function RoutesF() {
  return (
    <Routes>
      <Route exact path="/sample" element={SampleLayout} />
    </Routes>
  );
}
