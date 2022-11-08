import { useState } from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../public/Logo_ML@2x.png";

const SearchBar = () => {
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
      <button onClick={() => (window.location.href = "/items?search=" + query)}>
        {query}
      </button>
    </div>
  );
};

export { SearchBar };
