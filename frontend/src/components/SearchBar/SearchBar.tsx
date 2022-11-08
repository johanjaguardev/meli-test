import React, { useState } from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../public/Logo_ML@2x.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
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
      <button onClick={() => navigate("/items?search=" + query)}>
        {query}
      </button>
    </div>
  );
};

export { SearchBar };
