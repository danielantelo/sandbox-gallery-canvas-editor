import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Gallery = lazy(() => import("./pages/Gallery"));
const Editor = lazy(() => import("./pages/Editor"));

function App() {
  return (
    <Routes>
      <Route path="/edit/:imageId" element={<Editor />} />
      <Route path="/" element={<Gallery />} />
    </Routes>
  );
}

export default App;
