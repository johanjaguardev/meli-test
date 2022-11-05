import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Results } from "./components/Results/Results";
import { Detail } from "./components/Detail/Detail";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="results" element={<Results />} />
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
