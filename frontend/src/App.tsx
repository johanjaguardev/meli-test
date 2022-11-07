import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Results } from "./components/Results/Results";
import { Detail } from "./components/Detail/Detail";
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="MeliApp">
      <SearchBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Results />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>

      {/*  */}
    </div>
  );
}

export default App;
