import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    props.onChangeSearch(search);
  };
  return (
    <>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={onChangeSearch} className="btn btn-outline-success">
          Search
        </button>
      </div>

      <p>🔎 untuk pencarian : {search} </p>
    </>
  );
};

export default Search;
