import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
