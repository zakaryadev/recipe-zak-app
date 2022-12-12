import React from "react";
import { useParams } from "react-router-dom";
import SearchInput from "../components/SearchInput";

function Search(props) {
  const { letter } = useParams();
  return (
    <div>
      <SearchInput />
      <div className="container list"></div>
      <h1>{letter}</h1>
    </div>
  );
}

export default Search;
