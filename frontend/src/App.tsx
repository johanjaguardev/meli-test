import "./App.scss";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Results } from "./components/Results/Results";
import { Detail } from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "MELI Test - Johan Vargas Sánchez";
  }, []);
  return (
    <div className="MeliApp">
      <SearchBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Results />} />
        <Route path="/items" element={<Results />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>

      {/*  */}
    </div>
  );
}

export default App;
