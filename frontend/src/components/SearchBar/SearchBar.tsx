import { useState } from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../public/Logo_ML@2x.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <div className="searchbar">
      <img src={meliLogo} alt="Mercado Libre Logo"></img> SearchBar
      <input
        type="text"
        className="searchbar__input"
        placeholder="Nunca dejes de buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          navigate("/items?search=" + query);
          navigate(0);
        }}
      >
        Search
      </button>
    </div>
  );
};

export { SearchBar };
