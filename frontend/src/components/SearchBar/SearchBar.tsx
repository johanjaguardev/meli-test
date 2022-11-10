import { useState } from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../public/Logo_ML@2x.png";
import searchIcon from "./../../../public/ic_Search@2x.png";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const _handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      _handleRedirect();
    }
  };
  const _handleRedirect = () => {
    navigate("/items?search=" + query);
    navigate(0);
  };
  return (
    <div className="searchbar">
      <div className="container">
        <Link to={`/`} className="searchbar__logo-link">
          <img
            src={meliLogo}
            alt="Mercado Libre Logo"
            className="searchbar__logo"
          />
        </Link>

        <div className="searchbar__input-box">
          <input
            type="text"
            className="searchbar__input"
            placeholder="Nunca dejes de buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={_handleKeyDown}
          />
          <button onClick={_handleRedirect} className="searchbar__button">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="searchbar__icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
