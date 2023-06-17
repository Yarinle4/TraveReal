import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer , Marker, Popup} from 'react-leaflet'
import { useMap } from "react-leaflet";

function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function SimpleMap( {city} ){

  
  const [position, setPosition] = useState([0,0]);
  console.log("city::", city);
  useEffect(() => {
    if(city === "Jerusalem"){
      setPosition([31.78556, 35.21222]);
    }
    else if(city === "Tel Aviv"){
      setPosition([32.0853, 34.7818]);
    }
    else if(city === "New York"){
      setPosition([40.7128, -74.0060]);
    }
  }, [city]);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <ChangeMapView center={position} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}