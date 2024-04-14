import React from "react";
import "./card.css";
import data from "./Data";
import Navbar from "./Navbar";
import { useState } from "react";
import MapWithMarkers from "./Map";

const Card = () => {
  const [search, setSearch] = useState("");
  const [coOrdinates, setCoOrdinates] = useState();
  const [mydata, setMydata] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setMydata(
      data.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(search);
      })
    );
    console.log(mydata);
  };
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          {mydata.map((item, key) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-head">
                  <img src={item.photo} alt="" />
                  <p>{item.name}</p>
                </div>

                <div className="about">
                  <p>{item.brief}</p>
                  <button onClick={() => setCoOrdinates(item.coOrdinates)}>
                    {item.location}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {coOrdinates && <MapWithMarkers coOrdinates={coOrdinates} />}
      </div>
    </>
  );
};

export default Card;
// .filter((item) => {
//   return search.toLowerCase() === ""
//     ? item
//     : item.name.toLowerCase().includes(search);
// })
