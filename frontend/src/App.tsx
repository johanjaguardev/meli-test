import { useState } from "react";
import reactLogo from "./assets/react.svg";
import meliLogo from "./../../assets/Logo_ML@2x.png";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Results } from "./components/Results/Results";
import { Detail } from "./components/Detail/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="MeliApp">
      <SearchBar />
      <Results />
      <Detail />
    </div>
  );
}

export default App;
