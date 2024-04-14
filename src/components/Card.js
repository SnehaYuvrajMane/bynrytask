import React from "react";
import "./card.css";
import data from "./Data";
import Navbar from "./Navbar";
import { useState } from "react";

const Card = () => {
  const [search, setSearch] = useState("");
  let mydata=data;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
     mydata=data.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    });
  };
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {mydata.map((item, key) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-head">
              <img src={item.photo} alt="" />
              <p>{item.name}</p>
            </div>

            <div className="about">
              <p>{item.brief}</p>
              <button>{item.location}</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
// .filter((item) => {
//   return search.toLowerCase() === ""
//     ? item
//     : item.name.toLowerCase().includes(search);
// })
