import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Map.css";
import Map from "../components/Map";
import MapListing from "../components/MapListing";

export default function MapPage({}) {
  const [location, setLocation] = useState("");
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    if (location) {
      getSightingsByLocation(location).then((data) => setSightings(data));
    }
  }, [location]);

  const getSightingsByLocation = async (location) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/sightings/${location}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  function findLocation(e) {
    setLocation(e.target.id);
  }

  return (
    <>
      <div className="map-wrapper">
        <Map findLocation={findLocation} />
        <MapListing location={location} sightings={sightings} />
      </div>
    </>
  );
}
