import { useState } from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../public/Logo_ML@2x.png";
import searchIcon from "./../../../public/ic_Search@2x.png";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [query, setQuery] = useState(search === null ? "" : search);
  const navigate = useNavigate();

  const _handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      _handleRedirect("/items?search=" + query);
    }
  };
  const _handleRedirect = (path: string) => {
    navigate(path);
    navigate(0);
  };
  return (
    <div className="searchbar">
      <div className="container">
        <div
          className="searchbar__logo-link"
          onClick={() => {
            _handleRedirect("/");
          }}
        >
          <img
            src={meliLogo}
            alt="Mercado Libre Logo"
            className="searchbar__logo"
          />
        </div>

        <div className="searchbar__input-box">
          <input
            type="text"
            className="searchbar__input"
            placeholder="Nunca dejes de buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={_handleKeyDown}
          />
          <button
            onClick={() => _handleRedirect("/items?search=" + query)}
            className={`searchbar__button ${query === "" ? "disabled" : ""}`}
            disabled={query === ""}
          >
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
