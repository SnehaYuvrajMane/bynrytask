import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function MapWithMarkers({ coOrdinates }) {
  const ZOOM_LEVEL = 9;
  const customIcon = new Icon({
    // iconUrl:"https://cdn-icons-png.flaticon.com/512/1865/1865269.png",
    iconSize: [38, 38],
    iconUrl: require("./placeholder.png"),
  });
  return (
    <div>
      <MapContainer
        center={coOrdinates} // Center of the map
        zoom={5} // Initial zoom level
        style={{ height: "700px", width: "600px" }} // Set the map's height and width
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Use OpenStreetMap tiles
        />
        <Marker position={coOrdinates} icon={customIcon}>
          {" "}
          {/* Marker position */}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapWithMarkers;
