import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Wrapper from "./Custom/Wrapper.jsx";
import Page from "./Custom/Page.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Wrapper" element={<Wrapper />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
