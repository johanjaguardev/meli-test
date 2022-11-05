import React from "react";
import "./SearchBar.scss";
import meliLogo from "./../../../../assets/Logo_ML.png";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <img src={meliLogo} alt="Mercado Libre Logo"></img> SearchBar
    </div>
  );
};

export { SearchBar };
