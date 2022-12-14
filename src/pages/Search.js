import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { getByAlphabet } from "../api";
import BreadCrum from "../components/BreadCrum";
import SearchItems from "../components/SearchItems";

function Search() {
  const [meals, setMeals] = useState([]);
  const push = useNavigate();
  const { search } = useLocation();
  function handleSearch(str) {
    push(`/search?=${str}`);
  }
  useEffect(() => {
    getByAlphabet(search ? search.split("=")[1].toLowerCase() : null).then(
      (data) => {
        setMeals(data.meals);
      }
    );
  }, [search]);

  return (
    <div className="container-sm">
      <BreadCrum />
      <SearchInput handleSearch={handleSearch} />
      <div className="list">
        {meals.map((item, index) => {
          return <SearchItems key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Search;
