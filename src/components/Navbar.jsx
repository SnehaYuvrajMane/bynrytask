import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ search, setSearch, handleSearch }) => {
  // console.log(search);

  return (
    <>
      <div className="search">
        <div>
          <form onSubmit={handleSearch} className="form">
            <input
              type="text"
              placeholder="search here"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//onChange={(e)=>setSearch(e.target.value)}
