import React from "react";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
